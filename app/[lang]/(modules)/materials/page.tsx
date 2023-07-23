import { Metadata } from "next"
import MaterialList from "./_components/server-components/material-list"
import { getAllMaterials } from "@/app/[lang]/(modules)/materials/_data/material-data"

export const metadata: Metadata = {
  title: "Next.js Base App",
}

export default async function Page() {
  const materials = await getAllMaterials()
  return (
    <>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Stacks
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs
              below.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {/* render each materials */}
            <MaterialList materials={materials} />
          </div>
        </div>
      </section>
    </>
  )
}
