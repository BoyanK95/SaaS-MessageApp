'use client'
import { ChatMembers } from '@/lib/converters/ChatMembers'
import { useSession } from 'next-auth/react'
import React from 'react'

const ChatListRows = ({initialChats}: {initialChats: ChatMembers[]}) => {
    const {data: session} = useSession()

  return (
    <div>ChatListRows</div>
  )
}

export default ChatListRows