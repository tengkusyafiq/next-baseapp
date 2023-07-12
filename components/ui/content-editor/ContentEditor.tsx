"use client"

import EditorJS, { OutputData } from "@editorjs/editorjs"
import React, { memo, useEffect, useRef } from "react"
import { EDITOR_TOOLS } from "./EditorTools"

//props
type Props = {
  data?: OutputData
  onChange(val: OutputData): void
  holder: string
  readOnly?: boolean
  onReady?(val?: OutputData): void
}

const EditorBlock = ({ data, onChange, holder, readOnly, onReady }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>()

  //initialize editorjs
  useEffect(
    () => {
      //initialize editor if we don't have a reference
      if (!ref.current) {
        const editor = new EditorJS({
          readOnly: readOnly ?? false, // edit mode
          holder: holder,
          tools: EDITOR_TOOLS,
          data,
          async onChange(
            api,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            event
          ) {
            const data = await api.saver.save()
            onChange(data)
          },
          async onReady() {
            // set initial data if we have it
            if (onReady) {
              onReady(data)
            }
            if (data) {
              try {
                await editor.isReady
                console.log("Editor.js is ready to work!")
                /** Do anything you need after editor initialization */
                await editor.render(data)
                console.log("rendered")
              } catch (reason) {
                console.log(`Editor.js initialization failed because of ${reason}`)
              }
            }
          },
        })
        ref.current = editor
      }

      //add a return function handle cleanup
      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy()
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <div id={holder} className="prose max-w-full" />
}

export default memo(EditorBlock)
