import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import React from "react";

type ChatPageProps = {
  params: {
    chatId: string;
  };
};

const ChatPage = async ({ params: { chatId } }: ChatPageProps) => {
  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Admin controls */}

        {/* Chat members badge */}

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto">
          <ChatMessages
            chatId={chatId}
            initialMessages={initialMessages}
            session={session}
          />
        </div>
        <div className="sticky bottom-0">
          <ChatInput chatId={chatId} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
