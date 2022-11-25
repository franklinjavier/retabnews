import { Header } from './Header'
import { renderWithRouter, screen } from '~/test.util'

describe('<Header />', () => {
  it('should render Header component', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Recentes')).toBeInTheDocument()
  })
})
