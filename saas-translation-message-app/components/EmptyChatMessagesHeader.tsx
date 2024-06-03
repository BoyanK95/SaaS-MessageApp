import React from "react";
import { MessageCircleIcon } from "lucide-react";

const EmptyChatMessagesHeader = () => {
  return (
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
  );
};

export default EmptyChatMessagesHeader;
