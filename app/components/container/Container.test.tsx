import { Container } from './Container'
import { renderWithRouter, screen } from '~/test.util'

describe('<Container />', () => {
  it('should render Container component', () => {
    renderWithRouter(<Container>xxx</Container>)
    expect(screen.getByText('xxx')).toBeInTheDocument()
  })
})
