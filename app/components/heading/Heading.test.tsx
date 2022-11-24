import { render, screen } from '@testing-library/react'

import { Heading } from './Heading'

describe('<Heading />', () => {
  it('should render Heading component', () => {
    render(<Heading>Remix Starter Template</Heading>)
    expect(screen.getByText('Remix Starter Template')).toBeInTheDocument()
  })
})
