"use client"

import { default as NImage } from "next/image"
import { PropsWithChildren } from "react"

/**
 * The idea is to replace the next/image with this component
 * TODO: add caching for aws s3 images, due to its 1 hour token. by manipulating the placeholder value
 * @param props
 * @returns
 */
export const Image = (props: React.ComponentProps<typeof NImage> & PropsWithChildren) => {
  const { children, ...linkProps } = props

  // TODO
  // // get src from props as string
  // const url = linkProps.src as string
  // let placeholder = linkProps.placeholder as PlaceholderValue
  // // if undefined, set it to blur
  // if (!placeholder) placeholder = "blur"

  // // check if url is already in our local storage
  // const cached = localStorage.getItem(url)

  // // if url is already in our local storage
  // if (cached) {
  //   // use the cache image as placeholder
  //   placeholder = "empty"
  // }

  // // update the placeholder
  // linkProps.placeholder = placeholder

  // return the image
  return <NImage {...linkProps}>{children}</NImage>
}

export default Image
