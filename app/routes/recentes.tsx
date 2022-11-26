import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Posts } from '~/components/posts'
import { contents, staleWhileRevalidate } from '~/model/contents'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ request }: LoaderArgs) {
  const qs = Object.fromEntries(new URL(request.url).searchParams)
  const page = String(qs.page || 1)
  const data = await contents({ page, strategy: 'new' })
  return json(data, {
    headers: {
      ...staleWhileRevalidate(),
    },
  })
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()

  return <Posts posts={posts} />
}
