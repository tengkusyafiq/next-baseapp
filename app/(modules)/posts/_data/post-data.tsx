"use client"
import axios from "axios"
import qs from "qs"
import useSWR from "swr"
import { TPost } from "@/app/(modules)/posts/_models/t-post"
import { useToast } from "@/components/ui/toast/use-toast"

// create an axios instance with base url and bearer token from env
export const mainEndpoint = process.env.NEXT_PUBLIC_BASE_API_URL + "/posts"
export const headers = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "Content-Type": "application/json",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "Cache-Control": "no-cache",
}

const api = axios.create({
  baseURL: mainEndpoint,
  headers: headers,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: "brackets" }),
  },
})

export const mainFetcher = async () => {
  const response = await api.get(mainEndpoint)
  // cast response to PostType[] if not null or empty
  if (response.data) {
    return response.data
  }
  return []
}

/** to get all posts */
export const useGetAllPosts = ({ search, page, limit }: { search?: string; page?: number; limit?: number } = {}) => {
  // prepare query params
  const params = new URLSearchParams()
  if (search) params.append("search", search)
  if (page) params.append("page", page.toString())
  if (limit) params.append("limit", limit.toString())

  // prepare endpoint
  const endpoint = mainEndpoint

  // prepare fetcher
  const fetcher = async (params: URLSearchParams) => {
    const response = await api.get(endpoint, { params })
    // cast response to PostType[] if not null or empty
    if (response.data) {
      return response.data
    }
    return []
  }

  // server state management
  const { data: posts, error, isLoading, isValidating, mutate } = useSWR<TPost[]>(endpoint, fetcher, {})
  return { posts, error, isLoading, isValidating, mutate }
}

/** to get a post */
export const useGetPost = (id: number) => {
  // prepare endpoint
  const endpoint = mainEndpoint + "/" + id

  // prepare fetcher
  const fetcher = async () => {
    const response = await api.get(endpoint)
    // cast response to PostType if not null or empty
    if (response.data) {
      return response.data
    }
    return null
  }

  // server state management
  const { data: post, error, isLoading, isValidating, mutate } = useSWR<TPost>(endpoint, fetcher, {})

  return { post, error, isLoading, isValidating, mutate }
}

/** to create a post */
export const useCreatePost = (newPost: TPost) => {
  // prepare server state management
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { posts } = useGetAllPosts()

  // do job: create
  const job = async () => {
    try {
      // trigger error if body is empty
      if (newPost.content === undefined) {
        throw new Error("Post body cannot be empty.")
      }

      // create new post. the post might have file
      const prepareBody = JSON.stringify({
        content: newPost.content,
      })

      // sync with server and update cache
      await api
        .post("", prepareBody)
        // if success, get the new post
        .then((res) => {
          newPost = res.data as TPost
        })
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list
      const optimisticList = [...(posts ?? []), newPost]

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Post created! 🎉", description: "We've created your post for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error creating post 😢", description: description })
      console.error("error creating post", error)
    }
  }

  return job
}

/** to update a post */
export const useUpdatePost = (updatedPost: TPost) => {
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { posts } = useGetAllPosts()

  const job = async () => {
    try {
      // sync with server and update cache
      await api
        .put(`${mainEndpoint}/${updatedPost.id}`, updatedPost)
        // if success, get the new post
        .then((res) => {
          updatedPost = res.data as TPost
        })
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list (remove existing post and add new post at the same index)
      const optimisticList = [...(posts ?? [])]
      const index = optimisticList.findIndex((obj) => obj.id === updatedPost.id)
      optimisticList.splice(index, 1, updatedPost)

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Post updated! 🎉", description: "We've updated your post for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error updating post 😢", description: description })
      console.error("error updating post", error)
    }
    return null
  }

  return job
}

/** to delete a post */
export const useDeletePost = (id: number) => {
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { posts } = useGetAllPosts()

  const job = async () => {
    try {
      // sync with server and update cache
      await api
        .delete(`${mainEndpoint}/${id}`)
        // if success, get the new post
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((res) => null)
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list (remove existing post)
      const optimisticList = [...(posts ?? [])].filter((obj) => obj.id !== id)

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Post removed! 🎉", description: "We've removed your post for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error removing post 😢", description: description })
      console.error("error removing post", error)
    }
    return null
  }

  return job
}
