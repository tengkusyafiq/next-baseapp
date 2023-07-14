import { create } from "zustand"
import { persist } from "zustand/middleware"

export type PostType = {
  id: number
  content: string
}

export const usePostStore = create(
  persist(
    (set) => ({
      // storage: to store current post
      post: null as PostType | null,
      // action: to set current post
      setPost: (updatedPost: PostType) => {
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
