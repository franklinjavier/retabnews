const units: { unit: Intl.RelativeTimeFormatUnit; ms: number }[] = [
  { unit: 'year', ms: 31536000000 },
  { unit: 'month', ms: 2628000000 },
  { unit: 'day', ms: 86400000 },
  { unit: 'hour', ms: 3600000 },
  { unit: 'minute', ms: 60000 },
  { unit: 'second', ms: 1000 },
]
const rtf = new Intl.RelativeTimeFormat('pt-br', { numeric: 'auto' })

/**
 * Get language-sensitive relative time message from Dates.
 * @param relative  - the relative dateTime, generally is in the past or future
 * @param pivot     - the dateTime of reference, generally is the current time
 */
export function relativeTimeFromDates(relative: Date | null, pivot: Date = new Date()): string {
  if (!relative) return ''
  const elapsed = relative.getTime() - pivot.getTime()
  return relativeTimeFromElapsed(elapsed)
}

/**
 * Get language-sensitive relative time message from elapsed time.
 * @param elapsed   - the elapsed time in milliseconds
 */
export function relativeTimeFromElapsed(elapsed: number): string {
  for (const { unit, ms } of units) {
    if (Math.abs(elapsed) >= ms || unit === 'second') {
      return rtf.format(Math.round(elapsed / ms), unit)
    }
  }
  return ''
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    dateStyle: 'full',
  }).format(date)
}
