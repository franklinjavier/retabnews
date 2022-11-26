import { json } from '@remix-run/node'
import { Link, useLoaderData, useParams } from '@remix-run/react'

import { Heading } from '~/components/heading'
import { PostDetails } from '~/components/posts/PostDetails'
import { userContents } from '~/model/contents'
import type { PostType } from '~/model/types'

import type { LoaderArgs } from '@remix-run/node'

export async function loader({ request, params }: LoaderArgs) {
  const username = params.username
  if (!username) throw json('User Not Found', { status: 404 })

  const data = await userContents(username)

  return json(data)
}

export default function Username() {
  const data = useLoaderData<typeof loader>()
  const params = useParams()

  return (
    <>
      <Heading className="mb-4">{params.username}</Heading>
      <ol className="list-inside list-disc">
        {data?.map((item: PostType) => (
          <li className="mb-3" key={item.id}>
            <Link className="font-medium" to={`/user/${item.owner_username}/${item.slug}`}>
              {item.title || item.body}
            </Link>
            <PostDetails post={item} />
          </li>
        ))}
      </ol>
    </>
  )
}
