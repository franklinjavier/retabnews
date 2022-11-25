import { json } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'

import global from './components/global.css'
import styles from './tailwind.css'
import { getThemeSession } from './utils/theme.server'
import { Container } from '~/components/container'
import { Header } from '~/components/header'
import type { Theme } from '~/utils/theme-provider'
import { NonFlashOfWrongThemeEls, ThemeProvider, isTheme, useTheme } from '~/utils/theme-provider'

import type { ActionArgs, LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'ReTabNews',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: global },
]

export async function loader({ request }: LoaderArgs) {
  const themeSession = await getThemeSession(request)

  return { theme: themeSession.getTheme() as Theme }
}

export async function action({ request }: ActionArgs) {
  const themeSession = await getThemeSession(request)
  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const theme = form.get('theme')

  if (!isTheme(theme)) {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    })
  }

  themeSession.setTheme(theme)
  return json({ success: true }, { headers: { 'Set-Cookie': await themeSession.commit() } })
}

type DocumentProps = {
  children: React.ReactNode
}

const Document = ({ children }: DocumentProps) => {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html className={theme ?? ''} lang="pt-br">
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-300">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  const data = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <Document>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Document>
    </ThemeProvider>
  )
}
