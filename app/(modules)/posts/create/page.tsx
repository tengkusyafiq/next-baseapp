"use client"

import { debounce } from "lodash"
import { useCreatePost } from "@/app/(modules)/posts/_data/post-data"
import { TPost, usePostStore } from "@/app/(modules)/posts/_models/t-post"
import { ThemeButton } from "@/components/theme-control/theme-button"
import { Button } from "@/components/ui/button/button"
import { Editor } from "@/components/ui/content-editor/editor"

export default function Page() {
  // from local store
  const getPost = usePostStore((state: any) => state.post)
  const setPost = usePostStore((state: any) => state.setPost)

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
          {/* put button on the right */}
          <div className="flex justify-end pb-4">
            <Button size={"sm"} variant={"secondary"} onClick={useCreatePost(getPost as TPost)}>
              Save
            </Button>
          </div>
          <div className="min-h-[30vh] justify-center space-y-8 border">
            <Editor
              onChange={debounce((data: string) => {
                // get the data from the editor and set it to the local store
                setPost({ ...getPost, content: data })
              }, 1000)}
            />
          </div>
        </div>
      </section>
    </>
  )
}
