// material type

export type MaterialType = {
  id: number
  title: string
  description: string
  string_and_links: {
    string: string
    link: string
    eta: number
  }[]
  icon: string
  total_eta: number
}
