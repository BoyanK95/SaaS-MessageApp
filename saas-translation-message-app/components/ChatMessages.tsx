"use client";

import { Message, sortedMessagesRef } from "@/lib/converters/Message";
import { useLanguageStore } from "@/store/store";
import { MessageCircleIcon } from "lucide-react";
import { Session } from "next-auth";
import React, { createRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

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
      {!loading && messages?.length === 0 && (
        <div className="flex flex-col justify-center items-center text-center p-20 rounded-xl space-y-2 bg-indigo-400 text-white font-extralight">
          <MessageCircleIcon className="w-12 h-12" />
          <h2>
            <span className="font-bold">Invite a friend</span> &{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            bellow to get <span>started!</span>
          </h2>
          <p>
            The <span className="font-bold text-blue-800 text-lg">AI</span> will
            auto-detect & translate it all for you
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
