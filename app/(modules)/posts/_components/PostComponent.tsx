import Link from "next/link"
import ContentBlock from "./ContentBlock"
import { Button } from "@/components/ui/button/Button"
import { PostType } from "../_types/PostType"

export default function PostComponent({ post }: { post: PostType }) {
  return (
    <div key={post.id} className="flex flex-col justify-center">
      <div className="flex flex-col justify-between rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <div>
          <h3 className="mb-4 text-2xl font-bold leading-5 text-gray-800 dark:text-white">{post.title}</h3>
        </div>
        <ContentBlock post={post} />
        <div className="flex justify-end">
          <Link href={`/posts/${post.id}`}>
            <Button>View</Button>
          </Link>
          <Button variant={"outline"} className="ml-2">
            Edit
          </Button>
          <Button variant={"destructive"} className="ml-2">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
