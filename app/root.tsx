import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import global from './components/global.css'
import styles from './tailwind.css'
import { Container } from '~/components/container'
import { Header } from '~/components/header'

import type { LinksFunction, MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ReTabNews',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: global },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-slate-800 dark:text-gray-300">
        <Header />
        <Container>
          <Outlet />
        </Container>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
