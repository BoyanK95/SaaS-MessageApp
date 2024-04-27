"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";
import LoadingButton from "./LoadingButton";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/converters/ChatMembers";

const CreateChatButton = ({ isLarge }: { isLarge?: boolean }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();
  const { toast } = useToast();

  const createNewChat = async () => {
    if (!session?.user.id) return;
    setLoading(true);
    toast({
      title: "Creating a new chat...",
      description:
        "This may take a few seconds, while we create a new chat for you...",
      duration: 2000,
    });
    // TODO: check if subscription is active and limit chat depending on it
    const chatId = uuidv4();
    await setDoc(addChatRef(chatId, session.user.id), {
      userId: session.user.id,
      email: session.user.email as string,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || "",
    })
      .then(() => {
        toast({
          title: "Success!",
          description: "You can now start chatting with your friends!",
          className: "bg-green-600 text-white",
          duration: 3000,
        });
        router.push(`chat/${chatId}`);
      })
      .catch((error) => {
        console.error(error);
        
        toast({
          title: "Error!",
          description: "Something went wrong, please try again later.",
          variant: "destructive",
          duration: 3000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLarge) {
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingButton /> : "Create a New Chat"}
        </Button>
      </div>
    );
  }

  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
