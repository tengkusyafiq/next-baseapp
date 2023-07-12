"use client"

import { OutputData } from "@editorjs/editorjs"
import ContentViewer from "@/components/ui/content-editor/ContentViewer"
import { PostType } from "../../_types/PostType"

/** pass edit:true for edit mode */
export default function ContentBlock({ post }: { post: PostType }) {
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  // null safety if jsonBody is null
  const postJsonBody = post.jsonBody ?? {}
  // convert postJsonBody to json, null safety if postJsonBody is empty or undefined
  if (postJsonBody === undefined) {
    return <div>Empty</div>
  }
  const outputData = postJsonBody as unknown as OutputData

  return (
    <div className="mb-4 rounded-md">
      <div className="m-2">{<ContentViewer data={outputData} />}</div>
    </div>
  )
}
