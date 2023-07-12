
import Link from "next/link"
import { Button } from "@/components/ui/button/Button"
import { PostType } from "../../_types/PostType"
import ContentBlock from "./ContentBlock"
import DeletePostButton from "./DeletePostButton"

export default function PostList({ posts }: { posts: PostType[] }) {
  return (
    <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
      {/* render each posts */}
      {posts.map((post: PostType) => (
        <div key={post.id} className="flex flex-col justify-center">
          <div className="flex flex-col justify-between rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
            <div>
              <h3 className="mb-4 text-2xl font-bold leading-5 text-gray-800 dark:text-white">{post.title}</h3>
            </div>
            <ContentBlock post={post} />
            <div className="flex justify-end">
              <Link prefetch={false} href={`/posts/${post.id}`}>
                <Button>View</Button>
              </Link>
              <Link prefetch={false} href={`/posts/${post.id}/edit`}>
                <Button variant={"outline"} className="ml-2">
                  Edit
                </Button>
              </Link>
              <DeletePostButton post={post} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
