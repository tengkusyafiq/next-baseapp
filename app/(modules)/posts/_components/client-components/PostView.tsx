"use client"
import Link from "next/link"
import DeletePostButton from "@/app/(modules)/posts/_components/client-components/DeletePostButton"
import { useGetPost } from "@/app/(modules)/posts/_data/post-client"
import { Button } from "@/components/ui/button/Button"
import { Editor } from "@/components/ui/content-editor/editor"

export function PostView({ postId }: { postId: number }) {
  const { post, error, isLoading, isValidating } = useGetPost(postId)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log(post)
  return (
    <>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div>Updating...</div>}
      {post && (
        <div>
          {/* put buttons on the right */}
          <div className="mb-4 flex justify-end">
            <Link prefetch={false} href={`/posts/${post.id}/edit`}>
              <Button variant={"outline"} className="ml-2">
                Edit
              </Button>
            </Link>
            <DeletePostButton post={post} href="/posts" />
          </div>
          <div className="justify-center space-y-8">{<Editor initContent={post.content} viewMode={true} />}</div>
        </div>
      )}
    </>
  )
}
