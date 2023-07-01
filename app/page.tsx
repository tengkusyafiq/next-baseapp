import { Metadata } from "next"
import BaseAppMaterials from "./baseapp-materials/page"

export const metadata: Metadata = {
  title: "Home",
}

export default function Page() {
  return (
    // showing the kickstart page.
    BaseAppMaterials()
  )
}
