import { Metadata } from "next"
import Head from "next/head"
import { BASE_APP_README_ADDITIONAL } from "../base-app-readme"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Next.js Base App</title>
      </Head>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Base App
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs below.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {BASE_APP_README_ADDITIONAL.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
                  <Image src={singleItem.icon} alt={singleItem.title} width={"100"} height={"100"} />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <div className="mb-4 text-gray-500 dark:text-gray-400">
                  {singleItem.description}
                  {/* loop over string_and_links and make an animated clickable badge */}
                  <div className="items-center space-x-2">
                    {singleItem.string_and_links.map((singleStringAndLink) => (
                      // string is the title of the badge
                      // link is the link to the page
                      <a
                        key={singleStringAndLink.string}
                        href={singleStringAndLink.link}
                        // also spacing between badges
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                      >
                        {singleStringAndLink.string}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
