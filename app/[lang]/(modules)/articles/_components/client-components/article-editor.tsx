"use client"
import { debounce } from "lodash"
import DeleteArticleButton from "@/app/[lang]/(modules)/articles/_components/client-components/delete-article-button"
import UpdateArticleButton from "@/app/[lang]/(modules)/articles/_components/client-components/update-article-button"
import { useGetArticle } from "@/app/[lang]/(modules)/articles/_data/article-data"
import { useArticleStore } from "@/app/[lang]/(modules)/articles/_models/t-article"
import { Editor } from "@/components/ui/content-editor/editor"

export function ArticleEdit({ articleId }: { articleId: number }) {
  const { article, error, isLoading, isValidating } = useGetArticle(articleId)
  // from local store
  const getArticle = useArticleStore((state: any) => state.article)
  const setArticle = useArticleStore((state: any) => state.setArticle)

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
            <UpdateArticleButton article={getArticle} />
            <DeleteArticleButton article={getArticle} href="/articles" />
          </div>
          <div className="min-h-[30vh] justify-center space-y-8 border">
            <Editor
              initContent={article.content}
              onChange={debounce((data: string) => {
                // get the data from the editor and set it to the local store
                setArticle({ ...getArticle, id: article.id, content: data })
              }, 1000)}
            />
          </div>
        </div>
      )}
    </>
  )
}
