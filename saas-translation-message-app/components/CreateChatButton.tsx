"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";

const CreateChatButton = ({ isLarge }: { isLarge?: boolean }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const subscription = useSubscriptionStore((state) => state.subscription);
  const router = useRouter();
  const { toast } = useToast();

  const createNewChat = async () => {
    //TODO add route with chatId when existing
    router.push("/chat/abs");
  };

  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
