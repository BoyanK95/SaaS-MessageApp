import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import React from "react";

type ChatPageProps = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: ChatPageProps) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {/* Admin controls */}

      {/* Chat members badge */}

      {/* Chat messages */}

      <ChatInput chatId={chatId} />
    </>
  );
};

export default ChatPage;
