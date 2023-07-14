"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button/Button"
import { useDeletePost } from "../../_data/post-client"
import { PostType } from "../../_types/PostType"

export default function DeletePostButton({ post, href }: { post: PostType; href?: string }) {
  return (
    <Link prefetch={false} href={(href ?? '') as unknown as URL}>
      <Button variant={"destructive"} className="ml-2" onClick={useDeletePost(post.id)}>
        Delete
      </Button>
    </Link>
  )
}
