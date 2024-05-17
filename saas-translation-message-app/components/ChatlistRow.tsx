"use client";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { limitedSortedMessagesRef, Message } from "@/lib/converters/Message";
import ChatListRowSkeleton from "./ChatListRowSkeleton";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";

const ChatListRow = ({ chatId }: { chatId: string }) => {
  const [messages, loading, error] = useCollectionData<Message>(
    limitedSortedMessagesRef(chatId)
  );
  const { data: session } = useSession();
  const router = useRouter();

  console.log("messages", messages);

  function prettyUUID(n: number = 5) {
    return chatId.substring(0, n);
  }

  const row = (message?: Message) => (
    <div
      key={chatId}
      onClick={() => router.push(`/chat/${chatId}`)}
      className="flex items-center p-5 cursor-pointer space-x-2 hover:bg-gray-200 dark:hover:bg-slate-700"
    >
      <UserAvatar
        name={(message?.user.name || session?.user.name) as string}
        image={(message?.user.image || session?.user.image) as string}
      />
      <div className="flex-1">
        <p className="font-bold">
          {!message
            ? "New Chat"
            : [message?.user.name || session?.user.name]
                .toString()
                .split(" "[0])}
        </p>
        <p className="text-gray-400 line-clamp-1">
          {/* TODO fix with [language] when available */}
          {message?.translated?.['en'] || 'Get the conversation started...'}
        </p>
      </div>

      <div className="text-xs text-gray-400 text-right">
        <p className="mb-auto">
          {message
            ? new Date(message.timestamp).toLocaleTimeString()
            : "No messages yet"}
        </p>
        <p>chat #{prettyUUID()}</p>
      </div>
    </div>
  );

  return (
    <div>
      {loading && <ChatListRowSkeleton />}
      {messages?.length === 0 && !loading && row()}
      {messages && messages.map((message) => row(message))}
    </div>
  );
};

export default ChatListRow;
