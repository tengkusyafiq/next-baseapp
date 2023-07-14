"use client"
import { debounce } from "lodash"
import { usePostStore } from "@/app/(modules)/posts/_types/PostType"
import { Editor } from "@/components/ui/content-editor/editor"
import DeletePostButton from "./DeletePostButton"
import UpdatePostButton from "./UpdatePostButton"
import { useGetPost } from "../../_data/post-client"

export function PostEdit({ postId }: { postId: number }) {
  const { post, error, isLoading, isValidating } = useGetPost(postId)
  // from local store
  const getPost = usePostStore((state: any) => state.post)
  const setPost = usePostStore((state: any) => state.setPost)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div>Updating...</div>}
      {post && (
        <div>
          {/* put buttons on the right */}
          <div className="mb-4 flex justify-end">
            <UpdatePostButton post={getPost} />
            <DeletePostButton post={getPost} href="/posts" />
          </div>
          <div className="min-h-[30vh] justify-center space-y-8 border">
            <Editor
              initContent={post.content}
              onChange={debounce((data: string) => {
                // get the data from the editor and set it to the local store
                setPost({ ...getPost, id: post.id, content: data })
              }, 1000)}
            />
          </div>
        </div>
      )}
    </>
  )
}
