"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import LoadingButton from "./LoadingButton";
import { useSubscriptionStore } from "@/store/store";
import ManageAccountButton from "./ManageAccountButton";

const CheckoutButton = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isSubscribed = subscription?.status === "active";

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    //push a document into firebase db
    setIsLoading(true);
    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1ObSlxE5eMXbZ5255mf8vIdm",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    // Stripe extension on firebase will create a checkout session
    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error.message}`);
        setIsLoading(false);
      }

      if (url) {
        //We have Stripe Checkout URL, lets redirect.
        window.location.assign(url);
        setIsLoading(false);
      }
    });

    //redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      {isSubscribed ? (
        <ManageAccountButton />
      ) : (
        <button
          onClick={() => createCheckoutSession()}
          className="mt-10 rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white dark:text-whte hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 disabled:bg-gray-500"
        >
          {isLoading ? <LoadingButton /> : "Sing up"}
        </button>
      )}
    </div>
  );
};

export default CheckoutButton;
