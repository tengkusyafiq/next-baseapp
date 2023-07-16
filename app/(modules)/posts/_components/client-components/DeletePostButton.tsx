"use client"
import Link from "next/link"
import { useDeletePost } from "@/app/(modules)/posts/_data/post-client"
import { PostType } from "@/app/(modules)/posts/_types/PostType"
import { Button } from "@/components/ui/button/Button"

export default function DeletePostButton({ post, href }: { post: PostType; href?: string }) {
  return (
    <Link prefetch={false} href={(href ?? '') as unknown as URL}>
      <Button variant={"destructive"} className="ml-2" onClick={useDeletePost(post.id)}>
        Delete
      </Button>
    </Link>
  )
}
