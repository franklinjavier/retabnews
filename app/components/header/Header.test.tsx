import { render, screen } from '@testing-library/react'

import { Container } from './Header'

describe('<Container />', () => {
  it('should render Container component', () => {
    render(<Container>xxx</Container>)
    expect(screen.getByText('xxx')).toBeInTheDocument()
  })
})
