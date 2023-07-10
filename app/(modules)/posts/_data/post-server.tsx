import "server-only"
import { cache } from "react"
import { PostType } from "../_types/PostType"

export const endpoint = process.env.BASE_API_URL + "/posts"
export const headers = {
  Authorization: `Bearer ${process.env.BASE_API_KEY}`,
}

/** getAll with params search, page, limit. will return PostType[] */
export const getAll = cache(async (search?: string, page?: number, limit?: number) => {
  // prepare query params
  const params = new URLSearchParams()
  if (search) params.append("search", search)
  if (page) params.append("page", page.toString())
  if (limit) params.append("limit", limit.toString())

  // fetch data no cache
  const response = await fetch(`${endpoint}?${params}`, { headers, cache: "no-store" })

  // handle error
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()
  // cast response to PostType[] if not null or empty
  if (data) {
    return data as PostType[]
  }
  return []
})

/** getOne with params uuid. will return PostType */
export const getOne = cache(async (id: number) => {
  // fetch data
  const response = await fetch(`${endpoint}/${id}`, { headers })

  // handle error
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()
  // cast response to PostType if not null
  if (data) {
    return data as PostType
  }
  return null
})
