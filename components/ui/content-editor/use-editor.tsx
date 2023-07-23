import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import Underline from "@tiptap/extension-underline"
import type { EditorOptions } from "@tiptap/react"
import { useEditor as useTipTap } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const editorOptions: Partial<EditorOptions> = {
  extensions: [
    StarterKit,
    Highlight,
    Underline,
    Subscript,
    Superscript,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Link,
  ],

  editorProps: {
    attributes: {
      class:
        "prose dark:prose-invert max-w-none p-4 focus:outline-none prose-a:cursor-pointer min-h-[calc(100dvh-12.75rem)]",
    },
  },
}

type UseEditorArgs = Partial<Omit<EditorOptions, "extensions" | "editorProps">>

export function useEditor(opts?: UseEditorArgs) {
  return useTipTap({
    ...editorOptions,
    ...opts,
  })
}
