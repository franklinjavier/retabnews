import clsx from 'clsx'

type HeadingProps = {
  children: React.ReactNode
  className?: string
}
export function Heading({ className, ...props }: HeadingProps) {
  return <h1 className={clsx('text-3xl', className)} {...props} />
}
