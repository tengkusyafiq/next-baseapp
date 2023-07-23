"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import * as React from "react"

import { Button } from "@/components/ui/button/Button"

export function ThemeButton({ className }: { className?: string }) {
  const { setTheme } = useTheme()

  return (
    <div className={className}>
      <Button
        variant="outline"
        className="border-none"
        size="icon"
        // toggle theme between light and dark
        onClick={() => {
          // check current theme
          if (document.documentElement.classList.contains("dark")) {
            // if dark, set to light
            setTheme("light")
          } else {
            // if light, set to dark
            setTheme("dark")
          }
        }}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
