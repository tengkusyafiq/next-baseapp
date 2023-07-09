"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button/Button"

// toggle edit mode
let editMode = true
export function setEditMode(mode: boolean) {
    editMode = mode
}

export function TogglePreviewButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      // toggle editor and preview mode
      onClick={() => {
        // check current mode
        if ( editMode) {
            setEditMode(false)
        } else {
            setEditMode(true)
        }
      }}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
