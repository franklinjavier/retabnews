import { Link } from '@remix-run/react'

import { PostDetails } from './PostDetails'
import type { Post } from '~/model/types'

type PostsProps = {
  posts: Post[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <ol className="list-inside list-disc">
      {posts.map((post) => (
        <li className="mb-3" key={post.id}>
          <Link className="font-medium" to={`/user/${post.owner_username}/${post.slug}`}>
            {post.title}
          </Link>
          <PostDetails post={post} />
        </li>
      ))}
    </ol>
  )
}
