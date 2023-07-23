import Image from "next/image"
import MaterialDialog from "@/app/[lang]/(modules)/materials/_components/server-components/material-dialog"
import { TMaterial } from "@/app/[lang]/(modules)/materials/_models/t-material"
import Link from "@/components/link-control/link"

export default function MaterialList({ materials, className }: { materials: TMaterial[]; className: string }) {
  return <div className={className}>{materials.map((material: TMaterial) => MaterialCard(material))}</div>
}

export function MaterialCard(material: TMaterial) {
  return (
    <div key={material.id}>
      <div key={material.title} className="flex flex-col items-center justify-center text-center">
        <Link key={material.id} href={"/materials/" + material.id}>
          <div className="mb-4 flex h-10 w-10 items-center justify-center lg:h-12 lg:w-12">
            <Image src={material.icon} alt={material.title} width={"100"} height={"100"} />
          </div>
        </Link>
        <Link key={material.id} href={"/materials/" + material.id}>
          <h3 className="mb-2 text-xl font-bold dark:text-white">{material.title}</h3>
          <div className="mb-2 text-gray-500 dark:text-gray-400">{material.description}</div>
        </Link>
        <MaterialDialog material={material} />
      </div>
    </div>
  )
}
