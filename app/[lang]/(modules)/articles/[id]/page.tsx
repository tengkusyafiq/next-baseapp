import { Metadata } from "next"
import useTranslation from "next-translate/useTranslation"
import { ArticleView } from "@/app/[lang]/(modules)/articles/_components/client-components/article-viewer"

export const metadata: Metadata = {
  title: "Article",
}

interface Props {
  params: {
    id: number
  }
}

export default async function Page({ params }: Props) {
  const { t } = useTranslation()
  return (
    <>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-2 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {t("knowledgebase")} 📖
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8">
            <ArticleView articleId={params.id} />
          </div>
        </div>
      </section>
    </>
  )
}
