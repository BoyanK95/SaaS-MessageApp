"use client";

import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { Session } from "next-auth";
import React, { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import EmptyChatMessagesHeader from "./EmptyChatMessagesHeader";
import ChatMessageContainer from "./ChatMessageContainer";

type ChatMessagesProps = {
  chatId: string;
  initialMessages: Message[];
  session: Session | null;
};

const ChatMessages = ({
  chatId,
  initialMessages,
  session,
}: ChatMessagesProps) => {
  const language = useLanguageStore((state) => state.language);
  const messagesEndRef = createRef<HTMLDivElement>();

  const [messages, loading, error] = useCollectionData<Message>(
    sortedMessagesRef(chatId),
    {
      initialValue: initialMessages,
    }
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, messagesEndRef]);

  console.log("messages", messages);

  return (
    <div className="p-5">
      {!loading && messages?.length === 0 && <EmptyChatMessagesHeader />}

      {messages?.map((message) => {
        const isSender = message.user.id === session?.user.id;
        return (
          <ChatMessageContainer
            message={message}
            isSender={isSender}
            language={language}
          />
        );
      })}
      {messages && messages?.length > 3 && <div ref={messagesEndRef} />}
    </div>
  );
};

export default ChatMessages;
