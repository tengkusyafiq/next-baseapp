"use client"

import { default as NLink } from "next/link"
import { useParams } from "next/navigation"
import { PropsWithChildren } from "react"

export const Link = (props: React.ComponentProps<typeof NLink> & PropsWithChildren) => {
  const { lang } = useParams()
  const { children, href, ...linkProps } = props
  let isExternal = false
  // do not add lang to external links
  if (typeof href === "string") {
    isExternal = href.startsWith("http") || href.startsWith("www")
  }
  return (
    <NLink href={isExternal ? href : `/${lang}${href}`} prefetch={false} {...linkProps}>
      {children}
    </NLink>
  )
}

export default Link
