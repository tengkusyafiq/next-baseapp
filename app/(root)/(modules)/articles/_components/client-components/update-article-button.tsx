"use client"
import { useUpdateArticle } from "@/app/(root)/(modules)/articles/_data/article-data"
import { TArticle } from "@/app/(root)/(modules)/articles/_models/t-article"
import { Button } from "@/components/ui/button/button"

export default function UpdateArticleButton({ article }: { article: TArticle }) {
  // get the edited article from local store
  // from local store
  // const getArticle = useArticleStore((state: any) => state.article) as TArticle
  // make sure the article id is the same as the edited article
  return (
    <Button size={"sm"} variant={"secondary"} onClick={useUpdateArticle(article)}>
      Save
    </Button>
  )
}
