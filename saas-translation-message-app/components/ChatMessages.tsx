'use client'

import { Message } from '@/lib/converters/Message';
import { Session } from 'next-auth';
import React from 'react'

type ChatMessagesProps = {
  chatId: string;
  initialMessages: Message[];
  session: Session | null;
};

const ChatMessages = ({chatId, initialMessages, session}: ChatMessagesProps) => {
  return (
    <div>ChatMessages</div>
  )
}

export default ChatMessages