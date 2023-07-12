import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { ThemeButton } from "@/components/theme-control/theme-button"
import { Button } from "@/components/ui/button/Button"
import PostList from "./_components/client-components/PostList"
import { getAll } from "./_data/post-api"
import { PostType } from "./_types/PostType"

export const metadata: Metadata = {
  title: "Posts",
}

export default async function Page() {
  // get all posts using getAll from post-api
  const posts = await getAll()
  return (
    <>
      <section className="">
        {/* put ThemeButton on top right with padding */}
        <div className="flex justify-end p-4">
          <ThemeButton />
        </div>
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Knowledgebase 📖
            </h1>
            <Link prefetch={false} href="/posts/create">
              {/* New post button */}
              <Button>New ✏️</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <Suspense fallback={<p>Loading feed...</p>}>
            <PostList posts={posts as PostType[]} />
          </Suspense>
        </div>
      </section>
    </>
  )
}
