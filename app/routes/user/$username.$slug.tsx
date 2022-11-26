import { json } from '@remix-run/node'
import { useLoaderData, useParams } from '@remix-run/react'

import { Heading } from '~/components/heading'
import { Markdown } from '~/components/markdown'
import { userContent } from '~/model/contents'
import { markdownToHtml } from '~/utils/markdown.server'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ request, params }: LoaderArgs) {
  const username = params.username
  const slug = params.slug
  if (!username || !slug) throw json('Not Found', { status: 404 })

  const data = await userContent(username, slug)

  if (data.body) {
    data.body = await markdownToHtml(data.body)
  }

  return json(data)
}

export default function Username() {
  const data = useLoaderData<typeof loader>()
  const params = useParams()

  if (!data) return null

  return (
    <div>
      <Heading className="mb-4 text-3xl font-medium">{data.title}</Heading>
      <Markdown body={data.body ?? ''} />
    </div>
  )
}
