import { Link } from '@remix-run/react'

import { PostDetails } from './PostDetails'
import type { PostType } from '~/model/types'

type PostsProps = {
  posts: PostType[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <ol className="posts list-inside list-disc">
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
