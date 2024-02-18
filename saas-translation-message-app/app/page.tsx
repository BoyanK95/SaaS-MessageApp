import Image from "next/image";
import Link from "next/link";
import React from "react";
import messageGif from "../images/landingPage/messagesGif.gif";
import chatGif from "../images/landingPage/chat.gif";
import blueChatGif from "../images/landingPage/blueMsg.gif";
import oneChatLoader from "../images/landingPage/oneChatLoader.gif";

export default function Home() {
  return (
    <main className="">
      <div className="relative isolate pt-24 dark:bg-gray-900">
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc[50%-11rem]] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc[50%-30rem] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 100% 61.6% 97.5% 85% 0.1% 80.7% 32.5% 60.2% 52.4% 68% 45% 34% 27.5% 1% 76% 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="py-12 h-screen xm-py-20 lg:pb-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="md:text-5xl text-3xl font-bold pb-7">
              Chat with Anyone, anywhere, crypted and{" "}
              <span className="text-indigo-300 md:text-9xl text-5xl">
                discreet
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You speak your language they speak their language{" "}
              <span className="text-indigo-600 dark:text-indigo-500">
                Let AI handle the translation.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={"/chat"}
                className="rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white dark:text-whte hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <br />
              <Link
                href={"/pricing"}
                className="text-sm font-semibold hover:text-gray-500 dark:hover:text-gray-200  leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true">.</span>
              </Link>
            </div>
          </div>
          {/* 
          <div className="mt-16 flow-root sm:mt-24 items-center">
            <div className="mt-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src={oneChatLoader}
                alt="app-screenshot"
                width={2550}
                height={860}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
