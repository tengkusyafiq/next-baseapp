"use client"

import { useSearchParams } from "next/navigation"
import DeleteArticleButton from "@/app/(modules)/articles/_components/client-components/delete-article-button"
import { useGetAllArticles } from "@/app/(modules)/articles/_data/article-data"
import { clipArticle } from "@/app/(modules)/articles/_data/article-service"
import { TArticle } from "@/app/(modules)/articles/_models/t-article"
import Link from "@/components/link-control/link"
import { Button } from "@/components/ui/button/button"
import { Editor } from "@/components/ui/content-editor/editor"

export default function ArticleList() {
  // get search params from url
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const page = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 10)
  const { articles, error, isLoading, isValidating } = useGetAllArticles({ search: search, page: page, limit: limit })

  // if loading
  if (isLoading) {
    return <div className="items-center">Loading...</div>
  }

  // if error
  if (error) {
    // center the error message
    return <div className="content-center">Error: {error.message}</div>
  }

  return (
    <div>
      {/* if the data is validating in the background, show indicator */}
      {isValidating && <div className="items-center">Updating...</div>}
      {/* each card consume 1 row. screen can see 2 cards at a time */}
      <div className="flex flex-col items-center">
        {(articles ?? []).map((article: TArticle) => (
          // each card consume whole width
          <div key={article.id} className="max-w-full overflow-hidden rounded-lg shadow-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mt-2 text-sm text-gray-900 dark:text-gray-400">
                <Editor initContent={clipArticle(article.content)} viewMode={true} />
              </div>
              <div className="flex justify-end pt-2">
                <Link href={`/articles/${article.id}`}>
                  <Button>View</Button>
                </Link>
                <Link href={`/articles/${article.id}/edit`}>
                  <Button variant={"outline"} className="ml-2">
                    Edit
                  </Button>
                </Link>
                <DeleteArticleButton articleId={article.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
