import { NavLink, useTransition } from '@remix-run/react'

import { Container } from '~/components/container'
import { ThemeToggle } from '~/components/theme'

type HeaderProps = {}

const Loading = () => (
  <svg
    enableBackground="new 0 0 0 0"
    height="40"
    id="L9"
    version="1.1"
    viewBox="0 0 100 100"
    width="40"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    y="0px"
  >
    <path
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      fill="#fff"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        dur="600ms"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </svg>
)

export function Header(props: HeaderProps) {
  const transition = useTransition()
  const isLoading = transition.state !== 'idle'
  return (
    <header className="supports-backdrop-blur:bg-zinc-800 sticky top-0 z-40 w-full flex-none bg-white/75 backdrop-blur transition-colors duration-500 dark:border-none dark:bg-[#1b1b1b]/75 lg:z-50 lg:border-b">
      <Container className="flex items-center">
        <nav className="flex h-16 items-center gap-2 text-zinc-800 dark:text-zinc-100">
          {[
            { url: '.', text: 'Relevantes' },
            { url: 'recentes', text: 'Recentes' },
          ].map((item) => (
            <NavLink className="hover:opacity-80" key={item.text} to={item.url}>
              {item.text}
            </NavLink>
          ))}
          {isLoading && <Loading />}
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  )
}
