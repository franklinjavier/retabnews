import '@testing-library/jest-dom'

jest.mock('@remix-run/react', () => ({
  ...jest.requireActual('@remix-run/react'),
  useMatches: () => [{ pathname: '/', data: { user: { displayName: 'foo' } } }],
}))
