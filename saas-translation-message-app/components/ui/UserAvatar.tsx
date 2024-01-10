import React from "react";
//@ts-ignore
import { cn } from "@/lib/utils";
//@ts-ignore
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name: string;
  image?: string;
  className?: string;
}) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name || "profile-image"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback className="bg-white text-black">
        <Image
          src="https://icons.veryicon.com/png/o/miscellaneous/administration/account-25.png"
          alt="fallback-image"
          width={40}
          height={40}
        />
        {/* Pr */}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
