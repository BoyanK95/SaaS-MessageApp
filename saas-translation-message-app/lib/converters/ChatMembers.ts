import { db } from "@/firebase";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  collectionGroup,
  doc,
  query,
  where,
} from "firebase/firestore";

export interface ChatMembers {
  userId: string;
  email: string;
  timestamp: Date | null;
  isAdmin: boolean;
  chatId: string;
  image: string;
}

const chatMemberConverter: FirestoreDataConverter<ChatMembers> = {
  toFirestore: function (member: ChatMembers): DocumentData {
    return {
      ...member,
    };
  },

  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ChatMembers {
    const data = snapshot.data(options);

    return {
      userId: snapshot.id,
      email: data.email,
      timestamp: data.timestamp,
      isAdmin: data.isAdming,
      chatId: data.chatId,
      image: data.image,
    };
  },
};

export const addChatRef = (chatId: string, userId: string) => {
  return doc(db, "chats", chatId, "members", userId).withConverter(
    chatMemberConverter
  );
};

export const chatMembersRef = (chatId: string, userId: string) => {
  return collection(db, "chats", chatId, "members", userId).withConverter(
    chatMemberConverter
  );
};

export const chatMemberAdminRef = (chatId: string) => {
  return query(
    collection(db, "chats", chatId, "members"),
    where("isAdming", "==", true)
  ).withConverter(chatMemberConverter);
};

export const chatMembersCollectionGroupRef = (userId: string) => {
  return query(
    collectionGroup(db, "members"),
    where("userId", "==", userId)
  ).withConverter(chatMemberConverter);
};
