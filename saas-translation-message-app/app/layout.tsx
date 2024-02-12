import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import ClientProvider from "../components/ClientProvider";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/SubscriptionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deal Me Messaging App",
  description: "A great app to text each outher in every language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
