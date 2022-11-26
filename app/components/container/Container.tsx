import clsx from 'clsx'

type HeadingProps = {
  children: React.ReactNode
  className?: string
}
export function Container({ className, ...props }: HeadingProps) {
  return <div className={clsx('m-auto w-full max-w-5xl px-6', className)} {...props} />
}
