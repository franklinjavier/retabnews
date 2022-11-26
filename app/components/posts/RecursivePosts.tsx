import clsx from 'clsx'

import { Post } from './Post'
import type { PostType } from '~/model/types'

type RecursivePostsProps = {
  posts: PostType[]
  level: number
}

export function RecursivePosts({ posts, level }: RecursivePostsProps) {
  return posts.map((post) => {
    return (
      <section
        className={clsx('mt-4 flex', {
          'ml-1 md:ml-2': level > 0,
        })}
        key={post.id}
      >
        <div className="mx-2 w-0.5 bg-zinc-200 dark:bg-zinc-700 md:mx-4"></div>
        <div>
          <Post key={post.id} post={post} />
          {!!post.children?.length && <RecursivePosts level={level + 1} posts={post.children} />}
        </div>
      </section>
    )
  })
}
