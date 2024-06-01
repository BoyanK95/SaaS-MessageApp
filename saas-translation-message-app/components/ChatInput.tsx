"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormDescription,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";
import {
  User,
  limitedMessagesRef,
  messagesRef,
} from "@/lib/converters/Message";
import { addDoc, doc, getDocs, serverTimestamp } from "firebase/firestore";
import { useSubscriptionStore } from "@/store/store";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { ToastAction } from "@radix-ui/react-toast";

const formSchema = z.object({
  input: z.string().max(1000),
});

const ChatInput = ({ chatId }: { chatId: string }) => {
  const { data: session } = useSession();
  const subscription = useSubscriptionStore((state) => state.subscription);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!session?.user) return;
    if (!data.input.trim()) {
      form.reset();
      return;
    }
    const inputCoppy = data.input.trim();

    const isSubscriptionActive = subscription?.status === "active";

    const messagesCount = (await getDocs(limitedMessagesRef(chatId))).docs.map(
      (doc) => doc.data()
    ).length;

    //TODO delete logs
    console.log("messagesCount", messagesCount);
    console.log("chatId", chatId);

    if (!isSubscriptionActive && messagesCount >= 100) {
      toast({
        title: "Message limit reached",
        description:
          "You have reached the limit of messages for your subscription. Please upgrade your subscription to continue sending messages.",
        variant: "destructive",
        action: (
          <ToastAction
            altText="upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
      return;
    }
    const user: User = {
      id: session.user.id,
      name: session.user.name!,
      image: session.user.image!,
      email: session.user.email!,
    };
    console.log("user", user);
    addDoc(messagesRef(chatId), {
      input: inputCoppy,
      timestamp: serverTimestamp(),
      user: user,
    });

    //TODO delete logs
    console.log(data);
    form.reset();
  };

  return (
    <div className="sticky bottom-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-x-2 p-2 flex rounded-t-xl max-w-4xl mx-auto bg-white border dark:bg-slate-800"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="bg-transparent border-none dark:placeholder:text-white/70 dark:text-white placeholder:text-gray-400 text-black focus:ring-0 focus-visible:outline-none"
                    placeholder="Enter a message in ANY language..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 text-white"
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChatInput;
