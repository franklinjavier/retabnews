import { Link } from '@remix-run/react'

import type { PostType } from '~/model/types'
import { formatDate, relativeTimeFromDates } from '~/utils/date'

type PostDetailsProps = {
  post: PostType
}

export function PostDate({ post }: PostDetailsProps) {
  return (
    <Link
      className="text-xs text-zinc-500"
      title={formatDate(new Date(post.created_at))}
      to={`/user/${post.owner_username}/${post.slug}`}
    >
      {relativeTimeFromDates(new Date(post.created_at))}
    </Link>
  )
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
      <PostDate post={post} />
    </div>
  )
}
