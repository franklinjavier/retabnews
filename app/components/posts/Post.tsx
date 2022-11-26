import { Link } from '@remix-run/react'

import { Markdown } from '../markdown'
import { PostDate } from './PostDetails'
import type { PostType } from '~/model/types'

type PostProps = {
  post: PostType
}

export function Post({ post }: PostProps) {
  return (
    <div className="mb-6 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Link
          className="rounded-md bg-blue-100/70 px-1.5 py-[2px] font-mono text-sm text-blue-600 dark:bg-zinc-700 dark:text-zinc-400"
          prefetch="intent"
          to={`/user/${post.owner_username}`}
        >
          {post.owner_username}
        </Link>
        <PostDate post={post} />
      </div>
      <Markdown body={post.body ?? ''} />
    </div>
  )
}
