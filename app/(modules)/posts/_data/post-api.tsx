// import { revalidateTag } from "next/cache" // TODO: disabled until vercel fix this
import { PostType } from "../_types/PostType"

export const endpoint = process.env.NEXT_PUBLIC_BASE_API_URL + "/posts"
export const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
}

export const fetchSetting = {
  headers,
  next: {
    revalidate: 0, // revalidate every 5 seconds
    tags: [endpoint], // revalidate all items when one post is mutated
  },
}

/** getAll with params search, page, limit. will return PostType[] */
export const getAll = async (search?: string, page?: number, limit?: number) => {
  // prepare query params
  const params = new URLSearchParams()
  if (search) params.append("search", search)
  if (page) params.append("page", page.toString())
  if (limit) params.append("limit", limit.toString())

  // fetch data no cache
  const response = await fetch(`${endpoint}?${params}`, fetchSetting)

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
}

/** getOne with params id. will return PostType */
export const getOne = async (id: number) => {
  // fetch data
  const response = await fetch(`${endpoint}/${id}`, fetchSetting)

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
}

/** createOne with params data. will return PostType */
export const createOne = async (data: PostType) => {
  // create new post. the post might have file
  const prepareBody = JSON.stringify({
    title: data.title,
    jsonBody: data.jsonBody,
  })

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: prepareBody,
  })

  // handle error
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const res = await response.json()
  // cast response to PostType if not null
  if (res) {
    // revalidateTag(endpoint)
    return res as PostType
  }
  return null
}

/** updateOne with params id, data. will return PostType */
export const updateOne = async (id: number, data: PostType) => {
  // update post
  const body = {
    title: data.title,
    jsonBody: data.jsonBody,
  }

  const response = await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  })

  // handle error
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const res = await response.json()
  // cast response to PostType if not null
  if (res) {
    // revalidateTag(endpoint)
    return res as PostType
  }
  return null
}

/** deleteOne with params id. will return true */
export const deleteOne = async (id: number) => {
  // delete post
  const response = await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
    headers,
  })

  // handle error
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const res = await response.json()
  // cast response to PostType if not null
  if (res) {
    // revalidateTag(endpoint)
    return true
  }
  return false
}
