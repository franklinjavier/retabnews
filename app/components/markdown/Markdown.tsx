import clsx from 'clsx'

type MarkdownProps = {
  body: string
  className?: string
}
export function Markdown({ body, className }: MarkdownProps) {
  return <div className={clsx('markdown-body', className)} dangerouslySetInnerHTML={{ __html: body ?? '' }} />
}
