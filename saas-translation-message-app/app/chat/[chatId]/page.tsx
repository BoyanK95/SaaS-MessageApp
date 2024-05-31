import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import React from "react";

const ChatPage = async () => {
  const session = await getServerSession(authOptions);


  return (
    <>
      {/* Admin controls */}

      {/* Chat members badge */}

      {/* Chat messages */}

      <ChatInput chatId="123" />
    </>
  );
};

export default ChatPage;
