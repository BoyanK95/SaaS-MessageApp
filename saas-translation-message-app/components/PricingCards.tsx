import React from "react";
import { tier } from "@/utils/tier";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

const PricingCards = ({ redirect }: { redirect: boolean }) => {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tier.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col rounded-lg bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <span className="text-5xl font-bold -tracking-tight text-gray-700">
                    {`${tier.priceMonthly} ${tier.currency}`}
                  </span>
                ) : (
                  <span className="text-5xl font-bold -tracking-tight text-green-800">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-5 text-5xl font-bold -tracking-tight text-gray-900">
                {tier.desription}
              </p>
              <ul
                role="list"
                className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li className="flex gap-x-3" key={feature}>
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {redirect ? (
              <Link
                href={"/register"}
                className="mt-8 text-white rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:bg-gray-400 hover:bg-indigo-700"
              >
                Get Started Today
              </Link>
            ) : (
              tier.id && <CheckoutButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
