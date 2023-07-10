"use client"
import { useState } from "react"
import useSWR from "swr"
import { createOne, endpoint, getAll, removeOne, updateOne } from "@/app/(modules)/posts/_data/post-api"
import { useToast } from "@/components/ui/toast/use-toast"
import { PostType } from "../_types/PostType"

export const PostClientList = () => {
  const { toast } = useToast()
  const [newPost, setNewPost] = useState("")

  const { isLoading, error, data: posts, mutate } = useSWR(endpoint, getAll, {})

  const createPostMutation = async (newPost: PostType) => {
    try {
      // trigger error if body is empty
      console.log(newPost.jsonBody)
      if (newPost.jsonBody === "" || newPost.jsonBody === "undefined" || newPost.jsonBody === undefined) {
        throw new Error("Post body cannot be empty.")
      }
      // sync with server and update cache
      await createOne(newPost)
      mutate()

      // show toast
      toast({
        title: "Post created! 🎉",
        description: "We've created your post for you.",
      })
    } catch (error) {
      // get error message if it exists, otherwise show generic message
      toast({
        title: "Error creating post 😢",
        description: "Something went wrong.",
      })
    }
  }

  const updatePostMutation = async (updatedPost: PostType) => {
    try {
      // sync with server and update cache
      await updateOne(updatedPost.id, updatedPost)
      mutate()

      // show toast
      toast({
        title: "Post updated! 🎉",
        description: "We've updated your post for you.",
      })
    } catch (error) {
      // get error message if it exists, otherwise show generic message
      toast({
        title: "Error updating post 😢",
        description: "Something went wrong.",
      })
    }
  }

  const removePostMutation = async (id: number) => {
    try {
      // sync with server and update cache
      await removeOne(id)
      mutate()

      // show toast
      toast({
        title: "Post removed! 🎉",
        description: "We've removed your post for you.",
      })
    } catch (error) {
      // get error message if it exists, otherwise show generic message
      toast({
        title: "Error removing post 😢",
        description: "Something went wrong.",
      })
    }
  }
}

/** to get all posts */
export const useGetAllPosts = () => {
  const { data: posts, error, mutate } = useSWR(endpoint, getAll, {})
  return { posts, error, mutate }
}

/** to create a post */
export const useCreatePost = (newPost: PostType) => {
  const { toast } = useToast()
  const { mutate } = useSWR(endpoint, getAll, {})

  const createPostMutation = async () => {
    try {
      // trigger error if body is empty
      console.log(newPost.jsonBody)
      if (newPost.jsonBody === "" || newPost.jsonBody === "undefined" || newPost.jsonBody === undefined) {
        // TODO: dunno why, if use header, it will become undefined
        throw new Error("Post body cannot be empty.")
      }
      // sync with server and update cache
      await createOne(newPost)
      mutate()

      // show toast
      toast({
        title: "Post created! 🎉",
        description: "We've created your post for you.",
      })
    } catch (error: unknown) {
      let description = "Something went wrong."
      if (error instanceof Error) {
        description = error.message ?? "Something went wrong."
      }
      // get error message if it exists, otherwise show generic message
      toast({
        title: "Error creating post 😢",
        description: description,
      })
      console.error("error creating post", error)
    }
    return null
  }

  return createPostMutation
}
