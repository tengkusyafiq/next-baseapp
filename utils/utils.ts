import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** function for tailwindcss */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
