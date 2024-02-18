"use client";

import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { Subscription } from "@/types/Subscription";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

interface SubscriptionProviderProps {
  children: ReactNode;
}

const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({
  children,
}) => {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription
  );

  useEffect(() => {
    if (!session) {
      return;
    }

    return onSnapshot(
      subscriptionRef(session.user.id),
      (snapshot) => {
        if (snapshot.empty) {
          setSubscription(null);
          console.log("User has No subscription!");
          //TODO set no subscription
        } else {
          console.log("User has subscription");
          setSubscription(snapshot.docs[0].data() as Subscription);
        }
      },
      (errpr) => console.log("You have an Error!", errpr)
    );
  }, [session, setSubscription]);

  return <>{children}</>;
};

export default SubscriptionProvider;
