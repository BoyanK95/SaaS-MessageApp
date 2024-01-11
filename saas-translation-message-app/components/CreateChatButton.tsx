"use client";
import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";

const CreateChatButton = () => {
  return (
    <Button variant={'ghost'}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
