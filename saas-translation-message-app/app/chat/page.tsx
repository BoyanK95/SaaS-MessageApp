import ChatList from "@/components/ChatList";
import React from "react";

type ChatsProps = {
  params: {};
  searchParams: {
    error: string;
  };
};

const ChatsPage = ({ searchParams: { error } }: ChatsProps) => {
  return (
    <div>
      {/* Chat Permisson cat */}
      <h1 className="text-center font-semibold pt-5 text-2xl dark:text-indigo-300 text-blue-700">
        Chats
      </h1>
      <ChatList />
    </div>
  );
};

export default ChatsPage;
