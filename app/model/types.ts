export type Post = {
  children?: [{}]
  body?: string
  children_deep_count: number
  created_at: string
  deleted_at: string | null
  id: string
  owner_id: string
  owner_username: string
  parent_id: string | null
  published_at: string
  slug: string
  source_url: string
  status: string
  tabcoins: number
  title: string
  updated_at: string
}
