"use client"
import { Button } from "@/components/ui/button/Button"
import { useDeletePost } from "../../_data/post-client"
import { PostType } from "../../_types/PostType"

export default function DeletePostButton({ post }: { post: PostType }) {
  return (
    <Button variant={"destructive"} className="ml-2" onClick={useDeletePost(post.id)}>
      Delete
    </Button>
  )
}
