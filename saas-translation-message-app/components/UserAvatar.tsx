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
          src={
            image ||
            "https://icons.veryicon.com/png/o/miscellaneous/administration/account-25.png"
          }
          alt={name || "profile-image"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback delayMs={1000} className="bg-white text-black">
        {name
          ? name
              .split(" ")
              .map((n) => n[0])
              .join("")
          : "PR"}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
