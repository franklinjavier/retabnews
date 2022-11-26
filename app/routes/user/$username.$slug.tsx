import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Heading } from '~/components/heading'
import { Markdown } from '~/components/markdown'
import { RecursivePosts } from '~/components/posts/RecursivePosts'
import { userComments, userContent } from '~/model/contents'
import { markdownToHtml } from '~/utils/markdown.server'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ params }: LoaderArgs) {
  const username = params.username
  const slug = params.slug
  if (!username || !slug) throw json('Not Found', { status: 404 })

  const [post, children] = await Promise.all([userContent(username, slug), userComments(username, slug)])

  if (post.body) {
    post.body = await markdownToHtml(post.body)
  }

  const posts = await Promise.all(
    children.map(async function (item) {
      item.body = await markdownToHtml(item.body ?? '')
      return item
    }),
  )

  return json({ post, posts })
}

export default function Username() {
  const { post, posts } = useLoaderData<typeof loader>()

  if (!post) return null

  return (
    <>
      <Heading className="mb-4 text-3xl font-medium">{post.title}</Heading>
      <Markdown body={post.body ?? ''} />
      <RecursivePosts level={0} posts={posts} />
    </>
  )
}
