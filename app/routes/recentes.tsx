import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Posts } from '~/components/posts'
import { contents } from '~/model/contents'

import type { HeadersFunction, LoaderArgs } from '@remix-run/node'

export async function loader({ request }: LoaderArgs) {
  const qs = Object.fromEntries(new URL(request.url).searchParams)
  const page = String(qs.page || 1)
  const data = await contents({ page, strategy: 'new' })
  return json(data)
}

export let headers: HeadersFunction = () => {
  return {
    'Cache-Control': `public, max-age=${60 * 1}`,
  }
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()

  return (
    <main className="m-5">
      <Posts posts={posts} />
    </main>
  )
}
