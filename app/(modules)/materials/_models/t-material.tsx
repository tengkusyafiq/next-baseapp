// material type

export type TMaterial = {
  id: number
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  string_and_links: {
    string: string
    link: string
    eta: number
  }[]
  icon: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_eta: number
}
