import { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/components/link-control/link"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    <section className="">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Next.js Base App
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs below.
          </p>
          <div className="my-0 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="https://github.com/tengkusyafiq/next-baseapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              Clone the repo
            </a>
            <Link className="place-self-center" href="https://github.com/tengkusyafiq/next-baseapp">
              <Image
                className="dark:invert"
                src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"
                alt="github"
                width="20"
                height="20"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
