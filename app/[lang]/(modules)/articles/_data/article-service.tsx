/**
 * clip html content it to 1000 characters
 */
export function clipArticle(htmlContent: string, limit = 1000) {
  const content = htmlContent
  const clipped = content.substring(0, limit)
  // if clipped content is not the same as content, add ellipsis on new tag with centered tailwindcss
  if (clipped !== content) {
    return clipped + `...`
  }

  // return clipped content
  return clipped
}
