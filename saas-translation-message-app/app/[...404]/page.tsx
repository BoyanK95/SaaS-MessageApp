import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "../../images/error/404-image-purple.png";

export default function NotFoundPage() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-indigo-600 dark:text-red-300 text-3xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-red-300">
            Sorry, we couldn`t find the page you`re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-700 dark:text-blue-200 hover:text-blue-700 dark:hover:text-blue-500"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="pt-7">
            <Image
              src={NotFoundImg}
              alt="not-found-image"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </main>
    </>
  );
}
