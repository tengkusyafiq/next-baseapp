"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import DeletePostButton from "@/app/(modules)/posts/_components/client-components/delete-post-button"
import { useGetAllPosts } from "@/app/(modules)/posts/_data/post-data"
import { postClip } from "@/app/(modules)/posts/_data/post-service"
import { TPost } from "@/app/(modules)/posts/_models/t-post"
import { Button } from "@/components/ui/button/button"
import { Editor } from "@/components/ui/content-editor/editor"

export default function PostList() {
  // get search params from url
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const page = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 10)
  const { posts, error, isLoading, isValidating } = useGetAllPosts({ search: search, page: page, limit: limit })

  // if loading
  if (isLoading) {
    return <div className="items-center">Loading...</div>
  }

  // if error
  if (error) {
    // center the error message
    return <div className="content-center">Error: {error.message}</div>
  }

  return (
    <div>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div className="items-center">Updating...</div>}
      {/* each card consume 1 row. screen can see 2 cards at a time */}
      <div className="flex flex-col items-center">
        {(posts ?? []).map((post: TPost) => (
          // each card consume whole width
          <div key={post.id} className="max-w-full overflow-hidden rounded-lg shadow-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mt-2 text-sm text-gray-900 dark:text-gray-400">
                <Editor initContent={postClip(post.content)} viewMode={true} />
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
