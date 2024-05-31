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
import { User, messagesRef } from "@/lib/converters/Message";
import { addDoc, serverTimestamp } from "firebase/firestore";

const formSchema = z.object({
  input: z.string().max(1000),
});

const ChatInput = ({ chatId }: { chatId: string }) => {
  const { data: session } = useSession();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });
  console.log(chatId);
  

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!session?.user) return;
    if (!data.input) return;

    //TODO: limit creating chats for unsubscribed users
    const user: User = {
      id: session.user.id,
      name: session.user.name!,
      image: session.user.image!,
      email: session.user.email!,
    };
    console.log("user", user);
    addDoc(messagesRef(chatId), {
      input: data.input,
      timestamp: serverTimestamp(),
      user: user,
    });

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
