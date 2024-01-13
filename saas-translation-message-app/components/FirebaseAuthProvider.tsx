"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/firebase";

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  async function syncFirebaseAuth(session: Session) {
    if (session && session.firebaseToken) {
      try {
        await signInWithCustomToken(auth, session.firebaseToken);
      } catch (error) {
        console.error("Error singing custom token", error);
      }
    } else {
      auth.signOut();
    }
  }

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
};

export default FirebaseAuthProvider;
