import SvgEllipse from "@/components/SvgEllipse";
import React from "react";

const PricingPage = () => {
  return (
    <div className="isolate overflow-hidden dark:bg-gray-900">
      <div className="mx-auto max-w-7xl pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-500 dark:text-indigo-200">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-blue-200 font-semibold">
            Where 99% sure we have a plan to match your needs
          </p>
         <SvgEllipse />
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
            {/* PricingCards */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
