"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { set, z } from "zod";
import { useToast } from "./ui/use-toast";
import useAdminId from "@/hooks/useAdminId";
import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef, chatMembersRef } from "@/lib/converters/ChatMembers";
import { ToastAction } from "./ui/toast";
import { getUserByEmailRef } from "@/lib/converters/User";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const InviteUser = ({ chatId }: { chatId: string }) => {
  const { data: session } = useSession();
  const { toast } = useToast();
  const adminId = useAdminId({ chatId });
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [openInviteLink, setOpenInviteLink] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!session?.user.id) return;
    if (!values.email.trim()) {
      form.reset();
      return;
    }

    toast({
      title: "Sending invite",
      description: "Please wait while we send the invite...",
    });
    //We need to get the users current chats to check if they are about to exceed the PRO plan
    const numOfUsersInChat = (await getDocs(chatMembersRef(chatId))).docs.map(
      (doc) => doc.data()
    ).length;
    //check if the user is about to exceed the PRO plan which is 3 chats
    const isPro =
      subscription?.role === "pro" && subscription.status === "active";

    console.log("numOfUsersInChat", numOfUsersInChat);
    console.log("isPro", isPro);

    if (numOfUsersInChat >= 3 && !isPro) {
      toast({
        title: "Invite Failed",
        description: "You are about to exceed the PRO plan limit of 3 chats!",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => {
              router.push("/register");
            }}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
      return;
    }

    const querySnapshot = await getDocs(getUserByEmailRef(values.email));

    if (querySnapshot.empty) {
      toast({
        title: "User not found!",
        description:
          "Please enter an email of a registered user or resend invate once they have signed up.",
        variant: "destructive",
      });
      return;
    } else {
      const user = querySnapshot.docs[0].data();
      await setDoc(addChatRef(chatId, user.id), {
        userId: user.id,
        email: user.email || "",
        timestamp: serverTimestamp(),
        chatId: chatId,
        isAdmin: false,
        image: user.image || "",
      })
        .then(() => {
          setOpen(false);

          toast({
            title: "Added to chat",
            description: "User has been added to the chat successfully",
            className: "bg-green-600 text-white",
            duration: 3000,
          });

          setOpenInviteLink(true);
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Something went wrong, please try again",
            variant: "destructive",
          });

          setOpen(false);
        });
    }
    form.reset();
  }

  return (
    adminId === session?.user.id && (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircleIcon className="mr-1 cursor-pointer" />
              Add User to Chat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add User to Chat</DialogTitle>
              <DialogDescription>
                Simply enter another users email address to invite them to this
                chat!{" "}
                <span className="text-indigo-600 font-bold">
                  (Note: they must be registered!)
                </span>
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent border-none dark:placeholder:text-white/70 dark:text-white placeholder:text-gray-400 text-black focus:ring-0 focus-visible:outline-none"
                          placeholder="Enter a valid email address..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="ml-auto sm:w-fit w-full" type="submit">
                  Add To Chat
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    )
  );
};

export default InviteUser;
