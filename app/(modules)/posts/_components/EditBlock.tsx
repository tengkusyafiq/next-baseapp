"use client"

import { OutputData } from "@editorjs/editorjs"
import dynamic from "next/dynamic"
import { useState } from "react"
import { PostType, usePostStore } from "../_types/PostType"

// important that we use dynamic loading here, outside of the component
// editorjs should only be rendered on the client side.
const Editor = dynamic(() => import("@/components/ui/content-editor/ContentEditor"), {
  ssr: false,
})

export default function EditBlock({ currentPost }: { currentPost?: PostType }) {
  // state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>()
  // from local store
  const setPost = usePostStore((state: any) => state.setPost)
  // if we have a post, use it as initial data
  // post content is a stringified OutputData, so we need to parse it, then set it as initial data
  if (currentPost) {
    // setData(decodeURI(currentPost.jsonBody)) // TODO: this is not working
  }

  const OnContentChange = (data: OutputData) => {
    const jsonBodyString = JSON.stringify(data)
    setData(data)
    setPost({
      id: currentPost?.id,
      title: currentPost?.title,
      jsonBody: jsonBodyString,
    })
  }

  return (
    <div className="rounded-md border">
      <Editor data={data} onChange={OnContentChange} holder="editorjs-container" />
    </div>
  )
}
