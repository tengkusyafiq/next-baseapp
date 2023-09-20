import { Metadata } from "next"
import Image from "@/components/image-control/image"
import { Link } from "@/components/link-control/link"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    <section className="">
      <div className="desktop:py-16 mx-auto grid px-4 py-8 text-center">
        <div className="mx-auto place-self-center">
          <h1>Next.js Base App</h1>
          <p>
            Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs below.
          </p>
          <div className="my-0 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:space-y-0">
            <a href="https://github.com/tengkusyafiq/next-baseapp" target="_blank" rel="noopener noreferrer">
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
