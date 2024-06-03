"use client";

import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { Session } from "next-auth";
import React, { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import EmptyChatMessagesHeader from "./EmptyChatMessagesHeader";
import UserAvatar from "./UserAvatar";

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
          <div key={message.id} className="flex my-2 items-end">
            <div
              className={`flex flex-col space-y-2 p-4 w-fit line-clamp-1 mx-2 rounded-lg ${
                isSender
                  ? "ml-auto bg-violet-600 text-white rounded-br-none"
                  : "bg-gray-100 dark:text-gray-100 dark:bg-slate-700 rounded-bl-none"
              }`}
            >
              <p
                className={`text-xs italic font-extralight line-clamp-1 ${
                  isSender ? "text-right" : "text-left"
                }`}
              >
                {message.user.name.split(" ")[0]}
              </p>

              <div className="flex space-x-2">
                {/* Add loading spined after message translated is DONE! */}
                <p>{message?.translated?.[language] || message.input}</p>
              </div>
            </div>
            <UserAvatar
              name={message.user.name}
              image={message.user.image}
              className={`${!isSender && " -order-1"}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
