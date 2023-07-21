import { create } from "zustand"
import { persist } from "zustand/middleware"

export type TPost = {
  id: number
  content: string
}

export const usePostStore = create(
  persist(
    (set) => ({
      // storage: to store current post
      post: null as TPost | null,
      // action: to set current post
      setPost: (updatedPost: TPost) => {
        set(() => ({
          post: updatedPost,
        }))
      },
      // action: to clear current post
      clearPost: () => set({ post: null }),
    }),
    // key: to store in localStorage
    { name: "post" }
  )
)
