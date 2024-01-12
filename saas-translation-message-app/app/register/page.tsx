import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SvgEllipse from "@/components/SvgEllipse";
import PricingCards from "@/components/PricingCards";

const Register = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="isolate overflow-hidden dark:bg-gray-900">
      <div className="mx-auto max-w-7xl pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
            Lets handle your Membership{" "}
            <span className="dark:text-indigo-300 text-blue-600">
              {session?.user?.name?.split(" ")?.[0]}
            </span>
          </p>
        </div>
        <div className="relative mt-6">
          {/* <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-blue-200 font-semibold">
            Where 99% sure we have a plan to match your needs
          </p> */}
          <SvgEllipse />
        </div>
      </div>
      <div className="flow-root bg-slate-300/50 dark:bg-gray-800/60 pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
