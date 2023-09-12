"use client"
import axios from "axios"
import qs from "qs"
import useSWR from "swr"
import { TArticle } from "@/app/(modules)/articles/_models/t-article"
import { useToast } from "@/components/ui/toast/use-toast"

// create an axios instance with base url and bearer token from env
export const mainEndpoint = process.env.NEXT_PUBLIC_BASE_API_URL + "/articles"
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
  // cast response to TArticle[] if not null or empty
  if (response.data) {
    return response.data
  }
  return []
}

/** to get all articles */
export const useGetAllArticles = ({ search, page, limit }: { search?: string; page?: number; limit?: number } = {}) => {
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
    // cast response to TArticle[] if not null or empty
    if (response.data) {
      return response.data
    }
    return []
  }

  // server state management
  const { data: articles, error, isLoading, isValidating, mutate } = useSWR<TArticle[]>(endpoint, fetcher, {})
  return { articles, error, isLoading, isValidating, mutate }
}

/** to get a article */
export const useGetArticle = (id: number) => {
  // prepare endpoint
  const endpoint = mainEndpoint + "/" + id

  // prepare fetcher
  const fetcher = async () => {
    const response = await api.get(endpoint)
    // cast response to TArticle if not null or empty
    if (response.data) {
      return response.data
    }
    return null
  }

  // server state management
  const { data: article, error, isLoading, isValidating, mutate } = useSWR<TArticle>(endpoint, fetcher, {})

  return { article, error, isLoading, isValidating, mutate }
}

/** to create a article */
export const useCreateArticle = (newArticle: TArticle) => {
  // prepare server state management
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { articles } = useGetAllArticles()

  // do job: create
  const job = async () => {
    try {
      // trigger error if body is empty
      if (newArticle.content === undefined) {
        throw new Error("Article body cannot be empty.")
      }

      // create new article. the article might have file
      const prepareBody = JSON.stringify({
        content: newArticle.content,
      })

      // sync with server and update cache
      await api
        .post("", prepareBody)
        // if success, get the new article
        .then((res) => {
          newArticle = res.data as TArticle
        })
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list
      const optimisticList = [...(articles ?? []), newArticle]

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Article created! 🎉", description: "We've created your article for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error creating article 😢", description: description })
      console.error("error creating article", error)
    }
  }

  return job
}

/** to update a article */
export const useUpdateArticle = (updatedArticle: TArticle) => {
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { articles } = useGetAllArticles()

  const job = async () => {
    try {
      // sync with server and update cache
      await api
        .put(`${mainEndpoint}/${updatedArticle.id}`, updatedArticle)
        // if success, get the new article
        .then((res) => {
          updatedArticle = res.data as TArticle
        })
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list (remove existing article and add new article at the same index)
      const optimisticList = [...(articles ?? [])]
      const index = optimisticList.findIndex((obj) => obj.id === updatedArticle.id)
      optimisticList.splice(index, 1, updatedArticle)

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Article updated! 🎉", description: "We've updated your article for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error updating article 😢", description: description })
      console.error("error updating article", error)
    }
    return null
  }

  return job
}

/** to delete a article */
export const useDeleteArticle = (id: number) => {
  const { toast } = useToast()
  const { mutate } = useSWR(mainEndpoint, mainFetcher, {})
  const { articles } = useGetAllArticles()

  const job = async () => {
    try {
      // sync with server and update cache
      await api
        .delete(`${mainEndpoint}/${id}`)
        // if success, get the new article
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((res) => null)
        // if error, catch it
        .catch((error) => {
          throw new Error(error.message)
        })

      // prepare optimistic update list (remove existing article)
      const optimisticList = [...(articles ?? [])].filter((obj) => obj.id !== id)

      // mutate with optimistic update and rollback if error
      mutate(optimisticList, {
        optimisticData: optimisticList,
        revalidate: false, // disable revalidate
        populateCache: true, // populate cache with optimistic list
        rollbackOnError: true, // rollback if error
      })

      // show toast
      toast({ duration: 1000, title: "Article removed! 🎉", description: "We've removed your article for you." })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({ duration: 1000, title: "Error removing article 😢", description: description })
      console.error("error removing article", error)
    }
    return null
  }

  return job
}
