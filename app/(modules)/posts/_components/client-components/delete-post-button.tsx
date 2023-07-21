"use client"
import Link from "next/link"
import { useDeletePost } from "@/app/(modules)/posts/_data/post-data"
import { TPost } from "@/app/(modules)/posts/_models/t-post"
import { Button } from "@/components/ui/button/button"

export default function DeletePostButton({ post, href }: { post: TPost; href?: string }) {
  return (
    <Link prefetch={false} href={(href ?? "") as unknown as URL}>
      <Button variant={"destructive"} className="ml-2" onClick={useDeletePost(post.id)}>
        Delete
      </Button>
    </Link>
  )
}
