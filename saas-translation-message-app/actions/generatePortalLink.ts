"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { Stripe } from "stripe";
import { headers } from "next/headers";
import { adminDb } from "@/firebase-admin";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function generatePortalLink() {
  const session = await getServerSession(authOptions);
  const host = headers().get("host");

  // TODO: throw error instead of console.log after creating error.tsx page
  if (!session?.user.id) return console.log("No user Id found!!!");

  const {
    user: { id },
  } = session;

  const returnUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/register"
      : `https://${host}/register`;

  const doc = await adminDb.collection("customers").doc(id).get();

  if (!doc.data) {
    //TODO throw error instead of console.log after creating error.tsx page
    return console.log("No custumer found: ", id);
  }

  const stripeId = doc.data()!.stripeId;

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl,
  });

  redirect(stripeSession.url);
}
