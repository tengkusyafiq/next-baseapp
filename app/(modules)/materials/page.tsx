import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import MaterialDialog from "@/app/(modules)/materials/_components/MaterialDialog"
import { MaterialType } from "@/app/(modules)/materials/_types/MaterialType"
import { ThemeButton } from "@/components/theme-control/theme-button"
import { materials as mock_data } from "@/public/mock-data/materials"
import { Button } from "@/components/ui/button/Button"

export const metadata: Metadata = {
  title: "Next.js Base App",
}

export async function getBaseAppMaterials() {
  const materials = mock_data as MaterialType[]

  // calculate the total eta
  materials.forEach((material: MaterialType) => {
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
      <section className="">
        {/* put ThemeButton on top right with padding */}
        <div className="flex justify-end p-4">
          <ThemeButton />
          {/* button to go to example /posts */}
          <div className="pl-4">
            <Link href="/posts">
              <Button>See example</Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Base App
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jump start your new project with all essentials set up. If you are new to Next.js, check out the docs
              below.
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
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {/* render each materials */}
            {materials.map((material: MaterialType) => BaseAppMaterialComponent(material))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BaseAppMaterialComponent(material: MaterialType) {
  const navigate_to: string = "/materials/" + material.id
  return (
    <div key={material.id}>
      <div key={material.title} className="flex flex-col items-center justify-center text-center">
        <Link key={material.id} href={navigate_to}>
          <div className="mb-4 flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
            <Image src={material.icon} alt={material.title} width={"100"} height={"100"} />
          </div>
        </Link>
        <Link key={material.id} href={navigate_to}>
          <h3 className="mb-2 text-xl font-bold dark:text-white">{material.title}</h3>
          <div className="mb-2 text-gray-500 dark:text-gray-400">{material.description}</div>
        </Link>
        <MaterialDialog material={material} />
      </div>
    </div>
  )
}
