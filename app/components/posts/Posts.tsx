import { Link } from '@remix-run/react'

import { ClientOnly } from '../client-only'
import { formatDate, relativeTimeFromDates } from '~/utils/date'

export type Post = {
  id: string
  owner_id: string
  parent_id: string | null
  slug: string
  title: string
  status: string
  source_url: string
  created_at: string
  updated_at: string
  published_at: string
  deleted_at: string | null
  owner_username: string
  tabcoins: number
  children_deep_count: number
}

type PostsProps = {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <ol className="list-inside list-disc">
      {posts.map((item) => (
        <li className="mb-3" key={item.id}>
          <Link className="font-medium" to={`/${item.owner_username}/${item.slug}`}>
            {item.title}
          </Link>
          <div className="ml-5 text-xs text-zinc-500">
            <span>{item.tabcoins} tabcoins</span>
            {' · '}
            <span>{item.children_deep_count} comentários</span> {' · '}
            <Link prefetch="intent" to={`/${item.owner_username}`}>
              {item.owner_username}
            </Link>{' '}
            {' · '}
            <ClientOnly fallback={<>{item.published_at}</>}>
              {() => (
                <span title={formatDate(new Date(item.created_at))}>
                  {relativeTimeFromDates(new Date(item.created_at))}
                </span>
              )}
            </ClientOnly>
          </div>
        </li>
      ))}
    </ol>
  )
}
