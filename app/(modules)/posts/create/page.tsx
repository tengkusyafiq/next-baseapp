"use client"

import { Metadata } from "next"
import { ThemeButton } from "@/components/theme-control/theme-button"
import EditBlock from "../_components/EditBlock"

export const metadata: Metadata = {
  title: "Posts",
}

export default function Page() {
  return (
    <>
      <section className="">
        {/* put ThemeButton on top right with padding */}
        <div className="flex justify-end p-4">
          <ThemeButton />
        </div>
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              New Post ✏️
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8">
            <EditBlock />
          </div>
        </div>
      </section>
    </>
  )
}
