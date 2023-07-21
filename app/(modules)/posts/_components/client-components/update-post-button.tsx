"use client"
import { useUpdatePost } from "@/app/(modules)/posts/_data/post-data"
import { TPost } from "@/app/(modules)/posts/_models/t-post"
import { Button } from "@/components/ui/button/button"

export default function UpdatePostButton({ post }: { post: TPost }) {
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
