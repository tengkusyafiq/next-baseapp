"use client"

import { OutputData } from "@editorjs/editorjs"
import ContentViewer from "@/components/ui/content-editor/ContentViewer"
import { PostType } from "../_types/PostType"

/** pass edit:true for edit mode */
export default function ContentBlock({ post }: { post: PostType }) {
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  // null safety if jsonBody is null
  const postJsonBody = decodeURI(post.jsonBody ?? "")
  // convert postJsonBody to json, null safety if postJsonBody is empty or undefined
  if (postJsonBody === "" || postJsonBody === undefined) {
    return <div></div>
  }
  const outputData = JSON.parse(postJsonBody) as OutputData

  return (
    <div className="">
      <div className="m-11 rounded-md border">
        <div className="p-16">{<ContentViewer data={outputData} />}</div>
      </div>
    </div>
  )
}
