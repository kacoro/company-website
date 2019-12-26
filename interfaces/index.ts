export type PostLinkType = {
  id: string | number
  title: string
}

export type User = {
  id: number
  name: string
}

export type Project = {
  id: number
  name: string,
  banner: string,
  content: string
}

export type Post = {
  id: number
  title: string,
  banner?: string,
  content: string,
  date?:string | Date
}

export type BreadcrumbType = {
  name:string
  href?:string
}