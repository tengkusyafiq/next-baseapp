"use client"

import { OutputData } from "@editorjs/editorjs"
import dynamic from "next/dynamic"
import { useState } from "react"
import { PostType } from "../_types/PostType"

// important that we use dynamic loading here, outside of the component
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("@/components/ui/content-editor/ContentEditor"), {
  ssr: false,
})

/** pass edit:true for edit mode */
export default function EditBlock({ post }: { post?: PostType }) {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>()
  // if we have a post, use it as initial data
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  if (post) {
    setData(JSON.parse(post.jsonBody) as OutputData)
  }
  return (
    <div className="rounded-md border">
      <Editor data={data} onChange={setData} holder="editorjs-container" />
    </div>
  )
}
