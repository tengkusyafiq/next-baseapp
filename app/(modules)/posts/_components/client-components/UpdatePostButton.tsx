"use client"
import { useUpdatePost } from "@/app/(modules)/posts/_data/post-client"
import { PostType } from "@/app/(modules)/posts/_types/PostType"
import { Button } from "@/components/ui/button/Button"

export default function UpdatePostButton({ post }: { post: PostType }) {
  // get the edited post from local store
  // from local store
  // const getPost = usePostStore((state: any) => state.post)
  // make sure the post id is the same as the edited post
  return (
    <Button size={"sm"} variant={"secondary"} onClick={useUpdatePost(post)}>
      Save
    </Button>
  )
}
