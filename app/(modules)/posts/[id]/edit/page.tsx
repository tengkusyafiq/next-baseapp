import EditBlock from "@/app/(modules)/posts/_components/client-components/EditBlock"
import { ThemeButton } from "@/components/theme-control/theme-button"
import UpdatePostButton from "../../_components/client-components/UpdatePostButton"
import { getOne } from "../../_data/post-api"
import { Suspense } from "react"

interface Props {
  params: {
    id: number
  }
}

export default async function Page({ params }: Props) {
  const post = await getOne(params.id)

  return (
    <>
      <section className="">
        {/* put ThemeButton on top right with padding */}
        <div className="flex justify-end p-4">
          <ThemeButton />
        </div>
        <div className="mx-auto grid max-w-screen-xl px-4 text-center">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Update Post ✏️
            </h1>
          </div>
        </div>
      </section>
      <section className="">
        <Suspense fallback={<div>Loading...</div>}>
          {post && (
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
              {/* put button on the right */}
              <div className="flex justify-end pb-4">
                <UpdatePostButton post={post} />
              </div>
              <div className="justify-center space-y-8">{<EditBlock post={post} readOnly={false} />}</div>
            </div>
          )}
        </Suspense>
      </section>
    </>
  )
}
