"use client"

import { OutputData } from "@editorjs/editorjs"
import dynamic from "next/dynamic"
import { useState } from "react"
import { PostType, usePostStore } from "../../_types/PostType"

// important that we use dynamic loading here, outside of the component
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("@/components/ui/content-editor/ContentEditor"), {
  ssr: false,
})

let loaded = false

export default function EditBlock({ post, readOnly }: { post?: PostType; readOnly?: boolean }) {
  // state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>()
  // from local store
  const setPost = usePostStore((state: any) => state.setPost)

  const OnContentChange = (data: OutputData) => {
    setData(data)
    setPost({
      id: post?.id,
      title: post?.title,
      jsonBody: data,
    })
  }

  // if we have a post, use it as initial data
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  if (post && !loaded) {
    // use render to set initial data
    OnContentChange(post.jsonBody as unknown as OutputData)
    loaded = true
    console.log("loaded")
  }

  return (
    <div className="rounded-md border">
      <Editor data={data} onChange={OnContentChange} holder="editorjs-container" readOnly={readOnly ?? false} />
    </div>
  )
}
