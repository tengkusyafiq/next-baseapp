import { Metadata } from "next"
import BaseAppMaterials from "./materials/page"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    // showing the kickstart page.
    BaseAppMaterials()
  )
}
