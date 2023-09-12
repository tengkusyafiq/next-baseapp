import { ArticleEdit } from "@/app/(modules)/articles/_components/client-components/article-editor"

interface Props {
  params: {
    id: number
  }
}

export default function Page({ params }: Props) {
  return (
    <>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Update Article ✏️
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8">
            <ArticleEdit articleId={params.id} />
          </div>
        </div>
      </section>
    </>
  )
}
