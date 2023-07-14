import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/** function fro tailwindcss */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
