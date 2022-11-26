import type { Post } from './types'

type Contents = {
  path?: string
  strategy?: 'relevant' | 'new' | 'old'
  page?: string
  url?: string
}

export async function api({ path = '', ...params }: Contents = {}) {
  const url = new URL(`${process.env.BASE_API}/contents${path}`)
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]))
  const result = await fetch(url.href)
  return await result.json()
}

export async function contents(params: Contents = {}) {
  const result: Post[] = await api(params)
  return result
}

export async function userContents(username: string) {
  const result: Post[] = await api({ path: `/${username}` })
  return result
}

// /contents/gabrielabpedro/00ab00a3-aaa7-4237-a257-d13fc8e17ac0/children
export async function userContent(username: string, slug: string) {
  const result: Post = await api({ path: `/${username}/${slug}` })
  return result
}

export function staleWhileRevalidate() {
  return {
    'Cache-Control': `public, max-age=60, stale-while-revalidate=59`,
  }
}
