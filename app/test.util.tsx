import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <>{children}</>
  </BrowserRouter>
)

export const renderWithRouter = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const user = userEvent.setup()

  return {
    user,
    ...render(ui, { wrapper: AllTheProviders, ...options }),
  }
}
export * from '@testing-library/react'
