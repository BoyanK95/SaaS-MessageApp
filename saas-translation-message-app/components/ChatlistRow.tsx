'use client'

import { Skeleton } from "./ui/skeleton"

const ChatlistRow = ({chatId}: {chatId: string}) => {
  return (
    <div>{chatId}</div>
  )
}

export default ChatlistRow