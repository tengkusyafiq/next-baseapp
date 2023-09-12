"use client"
import { useDeleteArticle } from "@/app/(modules)/articles/_data/article-data"
import Link from "@/components/link-control/link"
import { Button } from "@/components/ui/button/button"

export default function DeleteArticleButton({ articleId, href }: { articleId: number; href?: string }) {
  return (
    <Link href={(href ?? "") as unknown as URL}>
      <Button variant={"destructive"} className="ml-2" onClick={useDeleteArticle(articleId)}>
        Delete
      </Button>
    </Link>
  )
}
