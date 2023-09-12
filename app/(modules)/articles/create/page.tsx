"use client"

import { debounce } from "lodash"
import { useCreateArticle } from "@/app/(modules)/articles/_data/article-data"
import { TArticle, useArticleStore } from "@/app/(modules)/articles/_models/t-article"
import { Button } from "@/components/ui/button/button"
import { Editor } from "@/components/ui/content-editor/editor"

export default function Page() {
  // from local store
  const getArticle = useArticleStore((state: any) => state.article) as TArticle
  const setArticle = useArticleStore((state: any) => state.setArticle)

  return (
    <>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              New Article ✏️
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          {/* put button on the right */}
          <div className="flex justify-end pb-4">
            <Button size={"sm"} variant={"secondary"} onClick={useCreateArticle(getArticle)}>
              Save
            </Button>
          </div>
          <div className="min-h-[30vh] justify-center space-y-8 border">
            <Editor
              onChange={debounce((data: string) => {
                // get the data from the editor and set it to the local store
                setArticle({ ...getArticle, content: data })
              }, 1000)}
            />
          </div>
        </div>
      </section>
    </>
  )
}
