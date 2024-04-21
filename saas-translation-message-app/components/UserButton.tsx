"use client";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import { GoStarFill } from "react-icons/go";

const UserButton = ({ session }: { session: Session }) => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  console.log(subscription);

  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign in
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session.user?.name!} image={session.user?.image!} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {subscription?.status === "active" && (
          <>
            <DropdownMenuLabel className="text-md flex space-x-1 text-purple-500 animate-pulse">
              <GoStarFill size={19} />
              <p>PRO</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Manage
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
