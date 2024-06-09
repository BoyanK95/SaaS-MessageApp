import { chatMemberAdminRef } from "@/lib/converters/ChatMembers";
import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

/**
 * Function for getting the admin id of a chat
 * @param {string} chatId - the Id of the chat
 * @returns
 */
const useAdminId = ({ chatId }: { chatId: string }) => {
  const [adminId, setAdminId] = useState<string>("");

  useEffect(() => {
    const fetchAdminStatus = async () => {
      const adminId = (await getDocs(chatMemberAdminRef(chatId))).docs.map(
        (doc) => doc.id
      )[0];
      setAdminId(adminId);
    };

    fetchAdminStatus();
  }, [chatId]);

  return adminId;
};

export default useAdminId;
