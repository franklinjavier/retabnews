type Contents = {
  strategy?: 'relevant' | 'new' | 'old'
  page: string
}

export async function contents({ strategy = 'relevant', page }: Contents) {
  const qs = new URLSearchParams({
    strategy,
    page,
  })
  const contents = await fetch(`${process.env.BASE_API}/contents?${qs}`)
  return await contents.json()
}

export function staleWhileRevalidate() {
  return {
    'Cache-Control': `max-age=1, stale-while-revalidate=59`,
  }
}
