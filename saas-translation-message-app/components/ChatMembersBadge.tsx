"use client";

import { ChatMembers, chatMemberAdminRef } from "@/lib/converters/ChatMembers";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

const ChatMembersBadge = ({ chatId }: { chatId: string }) => {
  const [members, loading, error] = useCollectionData<ChatMembers>(
    chatMemberAdminRef(chatId)
  );

  return <div>ChatMembersBadge</div>;
};

export default ChatMembersBadge;
