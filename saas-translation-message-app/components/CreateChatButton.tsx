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
      duration: 3000,
    });
    // TODO: check if subscription is active and limit chat depending on it
    const chatId = uuidv4();
    router.push("/chat/abs");
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
