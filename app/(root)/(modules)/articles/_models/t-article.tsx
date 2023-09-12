import { create } from "zustand"
import { persist } from "zustand/middleware"

export type TArticle = {
  id: number
  content: string
}

export const useArticleStore = create(
  persist(
    (set) => ({
      // storage: to store current article
      article: null as TArticle | null,
      // action: to set current article
      setArticle: (updatedArticle: TArticle) => {
        set(() => ({
          article: updatedArticle,
        }))
      },
      // action: to clear current article
      clearArticle: () => set({ article: null }),
    }),
    // key: to store in localStorage
    { name: "article" }
  )
)
