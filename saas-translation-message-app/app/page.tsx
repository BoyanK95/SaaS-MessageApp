import React from "react";

export default function Home() {
  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
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

        <div className="py-12 xm-py-20 lg:pb-40">
            <div className="mx-auto max-w-2xl text-center">
            <h1>Chat with Anyone, anywhere, crypted and untraceable</h1>
            </div>
        </div>
      </div>
    </main>
  );
}
