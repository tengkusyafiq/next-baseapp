"use client"
import DeleteArticleButton from "@/app/[lang]/(modules)/articles/_components/client-components/delete-article-button"
import { useGetArticle } from "@/app/[lang]/(modules)/articles/_data/article-data"
import Link from "@/components/link-control/link"
import { Button } from "@/components/ui/button/button"
import { Editor } from "@/components/ui/content-editor/editor"

export function ArticleView({ articleId }: { articleId: number }) {
  const { article, error, isLoading, isValidating } = useGetArticle(articleId)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div>Updating...</div>}
      {article && (
        <div>
          {/* put buttons on the right */}
          <div className="mb-4 flex justify-end">
            <Link href={`/articles/${article.id}/edit`}>
              <Button variant={"outline"} className="ml-2">
                Edit
              </Button>
            </Link>
            <DeleteArticleButton article={article} href="/articles" />
          </div>
          <div className="justify-center space-y-8">{<Editor initContent={article.content} viewMode={true} />}</div>
        </div>
      )}
    </>
  )
}
