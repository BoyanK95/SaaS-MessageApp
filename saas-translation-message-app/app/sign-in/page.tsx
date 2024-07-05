"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import WelcomeHeader from "@/components/WelcomeHeader";
import { useRouter } from "next/navigation";
import WelcomeRedirectHeader from "@/components/WelcomeRedirectHeader";

export default function Component() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const session = useSession();

  //TODO re-write handleLogIn and handleSignUp functions
  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const result = await signIn("credentials", {
        email,
        password,
        // redirect: false,
      });
      console.log(result);
      if (result?.ok) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      window.location.href = "/";
    }
  };

  if (!session) {
    return <WelcomeRedirectHeader link="chat" btnText="Go to Chats" />;
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <WelcomeHeader />
        <div className="bg-card rounded-lg shadow-lg">
          <div className="px-6 py-8 sm:px-10">
            {isLogin ? (
              <form onSubmit={handleLogIn}>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignUp}>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </div>
              </form>
            )}
          </div>
          <div className="border-t border-muted px-6 py-4 text-center text-sm">
            <span className="text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>{" "}
            <Button
              variant="link"
              onClick={() => setIsLogin((prev) => !prev)}
              className="font-medium text-primary hover:text-primary/90"
            >
              {isLogin ? "Register" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
