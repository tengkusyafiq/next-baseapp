import { type ClassValue, clsx } from "clsx"
import i18n from "i18n"
import { NextRequest, NextResponse } from "next/server"
import { twMerge } from "tailwind-merge"

/** function for tailwindcss */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** function to change language in cookie,param, and query param */
export async function updateRequestWithLocalization(request: NextRequest, locale: string) {
  const langList = i18n.locales.filter((x) => x !== "default")

  // make sure the locale is in the accepted list
  if (!langList.includes(locale) || locale === "default") {
    locale = "en"
  }

  request.nextUrl.searchParams.set("lang", locale)
  request.nextUrl.locale = locale
  const storedLocale = request.cookies.get("NEXT_LOCALE")?.value
  const response = NextResponse.rewrite(request.nextUrl)
  if (!storedLocale)
    // set default locale to the new locale
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
    })
  return response
}

/** function to change language on click */
export function getHrefLanguageAction(href: string, locale: string) {
  let finalHref = href
  // String manipulation
  // if the url already has a query param, we append the lang query param to the end of the query param
  if (href.includes("?")) {
    // check if the url already has a lang query param
    if (href.includes("lang=")) {
      // if the url already has a lang query param, we remove it
      finalHref = href.replace(/lang=[a-z]{2}/, `lang=${locale}`)
    } else {
      // if the url doesn't have a lang query param, we append it to the end of the query param
      finalHref = `${href}&lang=${locale}`
    }
  } else {
    finalHref = `${href}?lang=${locale}`
  }
  return finalHref
}
