"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const TipTapEditor = ({
  initialData,
  onChange,
  editable,
}: {
  initialData?: string
  onChange?: (data: string) => void
  editable?: boolean
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    autofocus: true,
    editable: editable ?? true,
    // triggered on every change
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange && onChange(html)
    },
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    onCreate: ({ editor }) => {
      editor.commands.setContent(initialData || "ho")
    },
  })

  return <EditorContent editor={editor} />
}

export default TipTapEditor
