import { screen } from '@testing-library/react'

import { Posts } from './Posts'
import type { PostType } from '~/model/types'
import { renderWithRouter } from '~/test.util'

const mock: PostType[] = [
  {
    id: '111',
    owner_id: '222',
    parent_id: null,
    slug: 'slug',
    title: 'foo bar',
    status: 'published',
    source_url: 'https://foo.bar',
    created_at: '2022-11-24T21:08:15.122Z',
    updated_at: '2022-11-24T21:08:15.122Z',
    published_at: '2022-11-24T21:08:15.126Z',
    deleted_at: null,
    owner_username: 'foo',
    tabcoins: 1,
    children_deep_count: 0,
  },
]
describe('<Posts />', () => {
  it('should render Posts component', () => {
    renderWithRouter(<Posts posts={mock} />)
    expect(screen.getByText('foo bar')).toBeInTheDocument()
  })
})
