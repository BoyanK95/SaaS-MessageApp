import React from "react";
import { Message } from "@/lib/converters/Message";
import UserAvatar from "./UserAvatar";

type ChatMessageContainerProps = {
  message: Message;
  isSender: boolean;
  language: string;
};

const ChatMessageContainer = ({
  message,
  isSender,
  language,
}: ChatMessageContainerProps) => {
  return (
    <div
      key={message.id}
      className="flex my-2 items-end overflow-y-auto relative"
    >
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
          <p>
            {(message.translated?.[
              language as keyof typeof message.translated
            ] as string) || message.input}
          </p>
        </div>
      </div>
      <UserAvatar
        name={message.user.name}
        image={message.user.image}
        className={`${!isSender && " -order-1"}`}
      />
    </div>
  );
};

export default ChatMessageContainer;
