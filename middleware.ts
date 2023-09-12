import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { updateRequestWithLocalization } from "@/utils/utils"

/** Regex to check if current path equals to a public file */
const PUBLIC_FILE = /\.(.*)$/

/** Ignore non-page paths */
const shouldProceed = (pathname: string) => {
  if (pathname.startsWith("/_next") || pathname.includes("/api/") || PUBLIC_FILE.test(pathname)) {
    return false
  }
  return true
}

export async function middleware(request: NextRequest) {
  const { locale, pathname } = request.nextUrl
  // Ignore non-page paths
  if (!shouldProceed(pathname)) return

  // Get the language from the query param if it exists, else use the default locale
  const lang = request.nextUrl.searchParams.get("lang") || locale
  const response = updateRequestWithLocalization(request, lang)

  return response
}
