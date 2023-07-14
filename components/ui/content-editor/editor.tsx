"use client"

import { EditorContent } from "@tiptap/react"
import { EditorToolbar } from "./editor-toolbar"
import { useEditor } from "./use-editor"

export type Content = { body: string }

type Props = {
  initContent?: string
  viewMode?: boolean
  onChange?: (data: string) => void
}

export function Editor({ initContent, viewMode, onChange }: Props) {
  const editor = useEditor({
    content: initContent || "",
    autofocus: true,
    editable: !viewMode ?? false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      onChange && onChange(html)
    },
  })

  if (!editor) return null

  const styles = viewMode ? "rounded-md border" : ""

  return (
    <div className={styles}>
      {!viewMode && <EditorToolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}
