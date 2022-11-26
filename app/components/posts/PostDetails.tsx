import { Link } from '@remix-run/react'

import type { Post } from '~/model/types'
import { formatDate, relativeTimeFromDates } from '~/utils/date'

type PostDetailsProps = {
  post: Post
}
export function PostDetails({ post }: PostDetailsProps) {
  return (
    <div className="ml-5 text-xs text-zinc-500">
      <span>{post.tabcoins} tabcoins</span>
      {' · '}
      <span>{post.children_deep_count} comentários</span> {' · '}
      <Link prefetch="intent" to={`/user/${post.owner_username}`}>
        {post.owner_username}
      </Link>{' '}
      {' · '}
      <span title={formatDate(new Date(post.created_at))}>
        {relativeTimeFromDates(new Date(post.created_at))}
      </span>
    </div>
  )
}
