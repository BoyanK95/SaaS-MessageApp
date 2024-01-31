"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface SubscriptionProviderProps {
  children: ReactNode;
}

const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({children}) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }

    return onSnapshot(subscriptionRef(session.user.id), (snapshot) => {
      if (snapshot.empty) {
        return alert("User has No subscription!");
        //TODO set no subscription
      } else {
        console.log("User has subscription");
        //TODO set subscription
      }
    });
  }, [session]);

  return <div>{children}</div>;
};

export default SubscriptionProvider;
