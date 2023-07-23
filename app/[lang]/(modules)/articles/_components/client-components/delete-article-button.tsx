"use client"
import { useDeleteArticle } from "@/app/[lang]/(modules)/articles/_data/article-data"
import { TArticle } from "@/app/[lang]/(modules)/articles/_models/t-article"
import Link from "@/components/link-control/link"
import { Button } from "@/components/ui/button/Button"

export default function DeleteArticleButton({ article, href }: { article: TArticle; href?: string }) {
  return (
    <Link href={(href ?? "") as unknown as URL}>
      <Button variant={"destructive"} className="ml-2" onClick={useDeleteArticle(article.id)}>
        Delete
      </Button>
    </Link>
  )
}
