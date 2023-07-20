import { Toolbar } from "@radix-ui/react-toolbar"
import type { Editor } from "@tiptap/react"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  RemoveFormatting,
  Strikethrough,
  Subscript,
  Superscript,
  Trash,
  Underline,
  Undo,
} from "lucide-react"

import { EditorButton, EditorToggle } from "./editor-button"
import { ScrollArea } from "@/components/ui/scroll-area/scroll-area"

export function EditorToolbar({ editor }: { editor: Editor }) {
  return (
    <ScrollArea orientation="horizontal" className="!sticky top-0 z-10 rounded-t-md border-b ">
      {/* set toolbar color */}
      <Toolbar aria-label="Formatting options" className="flex items-center gap-2 px-2 py-1.5 [&>*]:shrink-0">
        <div>
          <EditorButton title="Undo" icon={<Undo />} onPress={() => editor.chain().focus().undo().run()} />
          <EditorButton title="Redo" icon={<Redo />} onPress={() => editor.chain().focus().redo().run()} />
        </div>
        <div>
          <EditorToggle
            title="Bold"
            icon={<Bold />}
            active={editor.isActive("bold")}
            onPress={() => editor.chain().focus().toggleBold().run()}
          />
          <EditorToggle
            title="Italic"
            icon={<Italic />}
            active={editor.isActive("italic")}
            onPress={() => editor.chain().focus().toggleItalic().run()}
          />
          <EditorToggle
            icon={<Underline />}
            title="Underline"
            active={editor.isActive("underline")}
            onPress={() => editor.chain().focus().toggleUnderline().run()}
          />
          <EditorToggle
            title="Strike"
            icon={<Strikethrough />}
            active={editor.isActive("strike")}
            onPress={() => editor.chain().focus().toggleStrike().run()}
          />
          <EditorToggle
            title="Subscript"
            icon={<Subscript />}
            active={editor.isActive("subscript")}
            onPress={() => editor.chain().focus().toggleSubscript().run()}
          />
          <EditorToggle
            title="Superscript"
            icon={<Superscript />}
            active={editor.isActive("superscript")}
            onPress={() => editor.chain().focus().toggleSuperscript().run()}
          />
          <EditorToggle
            title="Highlight"
            icon={<Highlighter />}
            active={editor.isActive("highlight")}
            onPress={() => editor.chain().focus().toggleHighlight().run()}
          />
        </div>
        <div>
          <EditorToggle
            title="Heading 1"
            icon={<Heading1 />}
            active={editor.isActive("heading", { level: 1 })}
            onPress={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          />
          <EditorToggle
            title="Heading 2"
            icon={<Heading2 />}
            active={editor.isActive("heading", { level: 2 })}
            onPress={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          />
          <EditorToggle
            title="Heading 3"
            icon={<Heading3 />}
            active={editor.isActive("heading", { level: 3 })}
            onPress={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          />
          <EditorToggle
            title="Heading 4"
            icon={<Heading4 />}
            active={editor.isActive("heading", { level: 4 })}
            onPress={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          />
          <EditorToggle
            title="Blockquote"
            icon={<Quote />}
            active={editor.isActive("blockquote")}
            onPress={() => editor.chain().focus().toggleBlockquote().run()}
          />
          <EditorToggle
            icon={<Code2 />}
            title="Code Block"
            active={editor.isActive("codeBlock")}
            onPress={() => editor.chain().focus().toggleCodeBlock().run()}
          />
        </div>
        <div>
          <EditorToggle
            icon={<ListOrdered />}
            title="Ordered List"
            active={editor.isActive("orderedList")}
            onPress={() => editor.chain().focus().toggleOrderedList().run()}
          />
          <EditorToggle
            icon={<List />}
            title="Bullet List"
            active={editor.isActive("bulletList")}
            onPress={() => editor.chain().focus().toggleBulletList().run()}
          />
        </div>
        <div>
          <EditorToggle
            title="Align Left"
            icon={<AlignLeft />}
            active={editor.isActive({ textAlign: "left" })}
            onPress={() => editor.chain().focus().setTextAlign("left").run()}
          />
          <EditorToggle
            title="Justify"
            icon={<AlignJustify />}
            active={editor.isActive({ textAlign: "justify" })}
            onPress={() => editor.chain().focus().setTextAlign("justify").run()}
          />
          <EditorToggle
            title="Align Center"
            icon={<AlignCenter />}
            active={editor.isActive({ textAlign: "center" })}
            onPress={() => editor.chain().focus().setTextAlign("center").run()}
          />
          <EditorToggle
            title="Align Right"
            icon={<AlignRight />}
            active={editor.isActive({ textAlign: "right" })}
            onPress={() => editor.chain().focus().setTextAlign("right").run()}
          />
        </div>
        <div className="flex grow justify-end pr-2">
          <EditorButton
            icon={<RemoveFormatting />}
            title="Clear Formatting"
            onPress={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          />
          <EditorButton
            icon={<Trash />}
            title="Clear Editor"
            onPress={() => editor.chain().focus().clearContent().run()}
          />
        </div>
      </Toolbar>
    </ScrollArea>
  )
}
