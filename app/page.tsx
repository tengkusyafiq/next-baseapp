import { Metadata } from "next"
import BaseAppMaterials from "@/app/(modules)/materials/page"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    // showing the kickstart page.
    BaseAppMaterials()
  )
}
