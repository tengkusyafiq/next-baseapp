"use client"
import { Button } from "@/components/ui/button/Button"
import { useUpdatePost } from "../../_data/post-client"
import { PostType, usePostStore } from "../../_types/PostType"

export default function UpdatePostButton({ post }: { post: PostType }) {
  // get the edited post from local store
  // from local store
  const getPost = usePostStore((state: any) => state.post)
  // make sure the post id is the same as the edited post
  return (
    <Button size={"sm"} variant={"secondary"} onClick={useUpdatePost(getPost)}>
      Save
    </Button>
  )
}
