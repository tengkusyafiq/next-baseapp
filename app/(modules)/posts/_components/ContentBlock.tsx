"use client"

import { OutputData } from "@editorjs/editorjs"
import { useState } from "react"
import ContentViewer from "@/components/ui/content-editor/ContentViewer"
import { PostType } from "../_types/PostType"

/** pass edit:true for edit mode */
export default function ContentBlock({ post }: { post?: PostType }) {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>()
  // if we have a post, use it as initial data
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  if (post) {
    setData(JSON.parse(post.jsonBody) as OutputData)
  }
  return (
    <div className="">
      <div className="m-11 rounded-md border">
        <div className="p-16">{data && <ContentViewer data={data} />}</div>
      </div>
    </div>
  )
}
