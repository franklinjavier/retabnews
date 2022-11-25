// from https://github.com/sergiodxa/remix-utils/blob/main/src/react/client-only.tsx

import { useEffect, useState } from 'react'

import type { ReactNode } from 'react'

let hydrating = true

type Props = {
  /**
   * You are encouraged to add a fallback that is the same dimensions
   * as the client rendered children. This will avoid content layout
   * shift which is disgusting
   */
  children(): ReactNode
  fallback?: ReactNode
}

export function ClientOnly({ children, fallback = null }: Props) {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>
}

function useHydrated() {
  const [hydrated, setHydrated] = useState(() => !hydrating)

  useEffect(function hydrate() {
    hydrating = false
    setHydrated(true)
  }, [])

  return hydrated
}
