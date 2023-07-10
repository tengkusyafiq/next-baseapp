import { Metadata } from "next"
import Link from "next/link"
import { ThemeButton } from "@/components/theme-control/theme-button"
import { Button } from "@/components/ui/button/Button"
import PostComponent from "./_components/PostComponent"
import { getAll } from "./_data/post-server"
import { PostType } from "./_types/PostType"

export const metadata: Metadata = {
  title: "Posts",
}

export default async function Page() {
  // get all posts using getAll from post-server
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
            <Link href="/posts/create">
              {/* New post button */}
              <Button>New ✏️</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {/* render each posts */}
            {posts.map((post: PostType) => PostComponent({ post }))}
          </div>
        </div>
      </section>
    </>
  )
}
