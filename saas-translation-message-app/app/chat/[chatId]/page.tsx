import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import React from "react";

const ChatPage = async () => {
  const session = await getServerSession(authOptions);

  console.log("session");
  console.log(session);

  return (
    <>
      {/* Admin controls */}

      {/* Chat members badge */}

      {/* Chat messages */}
      <ChatInput />
    </>
  );
};

export default ChatPage;
