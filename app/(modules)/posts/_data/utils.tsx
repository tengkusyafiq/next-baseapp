/**
 * get post content html, and clip it to 1000 tags
 */
export function postClip(htmlContent: string, limit = 1000) {
  const content = htmlContent
  const clipped = content.substring(0, limit)
  // if clipped content is not the same as content, add ellipsis on new tag with centered tailwindcss
  if (clipped !== content) {
    return clipped + `...`
  }

  // return clipped content
  return clipped
}
