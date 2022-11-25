import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Theme, ThemeProvider } from './utils/theme-provider'

import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider specifiedTheme={Theme.DARK}>{children}</ThemeProvider>
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
