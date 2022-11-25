import { Heading } from './Heading'
import { renderWithRouter, screen } from '~/test.util'

describe('<Heading />', () => {
  it('should render Heading component', () => {
    renderWithRouter(<Heading>Remix Starter Template</Heading>)
    expect(screen.getByText('Remix Starter Template')).toBeInTheDocument()
  })
})
