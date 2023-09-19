import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllMaterials } from "@/app/(modules)/materials/_data/material-data"
import { TMaterial } from "@/app/(modules)/materials/_models/t-material"
import Image from "@/components/image-control/image"

export const metadata: Metadata = {
  title: "Baseapp Materials",
}
interface Props {
  params: {
    id: number
  }
}

async function getABaseAppMaterial(id: number) {
  const materials: TMaterial[] = await getAllMaterials()

  const material = materials.find((singleItem) => singleItem.id.toString() === id.toString())

  if (!material) {
    // show not found page
    return notFound()
  }
  return material
}

export default async function Page({ params }: Props) {
  const material = await getABaseAppMaterial(params.id)

  return (
    <>
      <section>
        <div className="mx-auto grid px-4 py-8 text-center lg:py-16">
          <div className="mx-auto items-center justify-center place-self-center pb-5">
            <Image src={material.icon} alt={material.title} width={"150"} height={"150"} />
          </div>
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {material.title}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {material.description}
            </p>
          </div>
        </div>
      </section>
      {/* make this section in the middle of the page */}
      <section
        className="
        mx-auto justify-center place-self-center"
      >
        {linkList(material)}
      </section>
    </>
  )
}

export function linkList(material: TMaterial) {
  return (
    <div className="items-center justify-center space-y-3">
      {material.stringAndLinks.map((singleStringAndLink) => (
        // create a card with rounded and shadow with title and random image, max 3 items per row, center on the page, animated on hover
        <div
          key={singleStringAndLink.string}
          className="
              mb-1 overflow-hidden rounded-lg
              bg-white shadow-lg transition duration-200 ease-in-out hover:-translate-y-1
              hover:scale-105
              hover:shadow-2xl
              dark:bg-gray-900
          "
        >
          <div className="px-6 py-4">
            <div className="mb-2">{singleStringAndLink.string}</div>
            <a
              href={singleStringAndLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              (~ {singleStringAndLink.eta} minutes)
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
