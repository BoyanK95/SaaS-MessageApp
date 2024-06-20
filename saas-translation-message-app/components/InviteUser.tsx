"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { z } from "zod";
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
