import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import React from "react";

const ChatList = async () => {
  const session = await getServerSession(authOptions);

  return <div>ChatList</div>;
};

export default ChatList;
