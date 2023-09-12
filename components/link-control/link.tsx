"use client"

import { default as NLink } from "next/link"
// import { useSearchParams } from "next/navigation"
import { PropsWithChildren } from "react"

export const Link = (props: React.ComponentProps<typeof NLink> & PropsWithChildren) => {
  const { children, href, ...linkProps } = props
  // const searchParams = useSearchParams()
  // const lang = searchParams.get("lang")

  // FOR ROUTING-BASED TRANSLATION
  // let isExternal = false
  // // do not add lang to external links
  // if (typeof href === "string") {
  //   isExternal = href.startsWith("http") || href.startsWith("www")
  // }
  // return (
  //   <NLink href={isExternal ? href : `/${lang}${href}`} prefetch={false} {...linkProps}>
  //     {children}
  //   </NLink>
  // )

  return (
    <NLink href={href} prefetch={false} {...linkProps}>
      {children}
    </NLink>
  )
}

export default Link
