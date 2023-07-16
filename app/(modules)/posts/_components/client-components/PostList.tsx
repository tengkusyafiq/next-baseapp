"use client"

import Link from "next/link"
import DeletePostButton from "@/app/(modules)/posts/_components/client-components/DeletePostButton"
import { useGetAllPosts } from "@/app/(modules)/posts/_data/post-client"
import { PostType } from "@/app/(modules)/posts/_types/PostType"
import { Button } from "@/components/ui/button/Button"
import { Editor } from "@/components/ui/content-editor/editor"

export default function PostList() {
  const { posts, error, isLoading, isValidating } = useGetAllPosts()

  // if loading
  if (isLoading) {
    return <div>Loading...</div>
  }

  // if error
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div>Updating...</div>}
      {/* each card consume 1 row. screen can see 2 cards at a time */}
      <div className="flex flex-col items-center">
        {(posts ?? []).map((post: PostType) => (
          // each card consume whole width
          <div key={post.id} className="h-1/4 max-w-full overflow-hidden rounded-lg shadow-lg">
            <div className="px-4 py-5 sm:p-6">
              {/* <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">{post.title}</h3> */}
              <div className="mt-2 max-w-xl text-sm text-gray-900 dark:text-gray-400">
                <Editor initContent={post.content} viewMode={true} />
              </div>
              <div className="flex justify-end pt-2">
                <Link prefetch={false} href={`/posts/${post.id}`}>
                  <Button>View</Button>
                </Link>
                <Link prefetch={false} href={`/posts/${post.id}/edit`}>
                  <Button variant={"outline"} className="ml-2">
                    Edit
                  </Button>
                </Link>
                <DeletePostButton post={post} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
