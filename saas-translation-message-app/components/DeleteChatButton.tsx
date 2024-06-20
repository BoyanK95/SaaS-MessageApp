"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useAdminId from "@/hooks/useAdminId";

const DeleteChatButton = ({ chatId }: { chatId: string }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const adminId = useAdminId({ chatId });

  const handleDeleteChat = async() => {
    // if (session?.user.id === adminId) {
    //   router.push("/dashboard");
    //   toast({
    //     title: "Chat Deleted",
    //     description: "The chat has been deleted",
    //     className: "bg-green-600 text-white",
    //   });
    // }
  };

  return (
    session?.user.id === adminId && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Chat</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This will delete the caht for all users
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 space-x-2">
            <Button variant={"destructive"} onClick={handleDeleteChat}>
              Delete
            </Button>

            <Button variant={"outline"} onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};

export default DeleteChatButton;
