import { create } from "zustand"
import { persist } from "zustand/middleware"

export type PostType = {
  id: number
  title: string
  jsonBody: string
}

export const usePostStore = create(
  persist(
    (set, get) => ({
      post: null as PostType | null,
      setPost: (updatedPost: PostType) => {
        set((state: any) => ({
          post: updatedPost,
        }))
      },
      clearPost: () => set({ post: null }),
    }),
    { name: "post" }
  )
)
