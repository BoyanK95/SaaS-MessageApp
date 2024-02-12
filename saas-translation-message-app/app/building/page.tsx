"use client";

import Link from "next/link";
import Image from "next/image";
import isBuldingPageImageDark from "../../images/buildingPage/website-builder-dark.webp";
import isBuldingPageImageLight from "../../images/buildingPage/website-builder-light.webp";
import { useTheme } from "next-themes";

const InBuildingPage = () => {
  const { theme } = useTheme();

  return (
    <main className="grid min-h-full place-items-center bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100 sm:text-5xl">
          Page is being build at the moment!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
          You might want to relocate to the already build parts of the website
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link
            //TODO change link when available
            href="/build"
            className="text-sm font-semibold text-gray-700 dark:text-blue-200 hover:text-blue-700 dark:hover:text-blue-500"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="pt-10">
          {theme === "light" ? (
            <Image
              src={isBuldingPageImageLight}
              alt="bulding-icon"
              width={600}
              height={350}
            />
          ) : (
            <Image
              src={isBuldingPageImageDark}
              alt="bulding-icon"
              width={600}
              height={350}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default InBuildingPage;
