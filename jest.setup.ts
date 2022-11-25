import '@testing-library/jest-dom'

jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  useMatches: () => [{ pathname: '/', data: { user: { displayName: 'foo' } } }],
  useTransition: () => [{ state: 'idle' }],
  useFetcher: () => {
    return { submit: () => jest.fn() }
  },
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
