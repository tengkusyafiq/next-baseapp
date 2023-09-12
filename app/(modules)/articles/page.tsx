import { Metadata } from "next"
import useTranslation from "next-translate/useTranslation"
import ArticleList from "@/app/(modules)/articles/_components/client-components/article-list"
import Link from "@/components/link-control/link"
import { Button } from "@/components/ui/button/button"

export const metadata: Metadata = {
  title: "Articles",
}

export default async function Page() {
  const { t } = useTranslation()
  return (
    <>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {t("knowledgebase")} 📖
            </h1>
            <Link href="/articles/create">
              {/* New article button */}
              <Button>New ✏️</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-4 py-8 sm:py-16 lg:px-6">
          <ArticleList />
        </div>
      </section>
    </>
  )
}
