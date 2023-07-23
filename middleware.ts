import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

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

  /** Ignore non-page paths */
  if (!shouldProceed(pathname)) return

  if (request.nextUrl.locale === "default") {
    /** Get user's locale */
    const storedLocale = request.cookies.get("NEXT_LOCALE")?.value

    const response = NextResponse.redirect(new URL(`/${storedLocale || "en"}/${request.nextUrl.pathname}`, request.url))

    /** Store default locale in user's cookies */
    if (!storedLocale)
      response.cookies.set("NEXT_LOCALE", "en", {
        path: "/",
      })

    /** Redirect user to default locale */
    return response
  }

  /** Adds ?lang={locale} for next-translate package */
  request.nextUrl.searchParams.set("lang", locale)

  // debugging
  console.log("debugging", request.nextUrl.href)

  return NextResponse.rewrite(request.nextUrl)
}
