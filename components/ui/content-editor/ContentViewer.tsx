import { OutputData } from "@editorjs/editorjs"
import editorJsHtml from "editorjs-html"
import React from "react"

//use require since editorjs-html doesn't have types
const EditorJsToHtml = editorJsHtml()

type Props = {
  data: OutputData
}
type ParsedContent = string | JSX.Element

const ContentViewer = ({ data }: Props) => {
  const html = EditorJsToHtml.parse(data) as ParsedContent[]
  return (
    //✔️ It's important to add key={data.time} here to re-render based on the latest data.
    // start at top left of page
    <div className="flex flex-col">
      <div className="prose max-w-full" key={data.time}>
        {html.map((item, index) => {
          if (typeof item === "string") {
            return <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          }
          return item
        })}
      </div>
    </div>
  )
}

export default ContentViewer
