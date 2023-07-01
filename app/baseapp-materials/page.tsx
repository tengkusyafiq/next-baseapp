import { Metadata } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "vimigo Next.js Base App",
}

export interface Material {
  id: number
  title: string
  description: string
  string_and_links: {
    string: string
    link: string
    eta: number
  }[]
  icon: string
  total_eta: number
}

export async function getBaseAppMaterials() {
  const res = await fetch("http://localhost:8888/api/baseapp-materials", { cache: "no-store" })
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  // calculate the total eta
  const materials = (await res.json()) as Material[]
  materials.forEach((material: Material) => {
    material.total_eta = material.string_and_links.reduce(
      (total: number, current: { eta: number }) => total + current.eta,
      0
    )
  })

  return materials
}

export default async function BaseAppMaterials() {
  const materials = await getBaseAppMaterials()
  return (
    <>
      <Head>
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
              Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs
              below.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {/* render each materials */}
            {materials.map((material: Material) => BaseAppMaterialComponent(material))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BaseAppMaterialComponent(material: Material) {
  return (
    <Link key={material.id} href={"/baseapp-materials/" + material.id}>
      <div key={material.title} className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
          <Image src={material.icon} alt={material.title} width={"100"} height={"100"} />
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{material.title}</h3>
        <div className="mb-4 text-gray-500 dark:text-gray-400">
          {material.description}
          {/* loop over string_and_links and make an animated clickable badge */}
          <div className="items-center space-x-2 pt-2">
            <a
              key={material.title}
              href={"/"}
              // also spacing between badges
              className="inline-flex items-center rounded-full
                bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Learn now (~{material.total_eta} minutes)
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}
