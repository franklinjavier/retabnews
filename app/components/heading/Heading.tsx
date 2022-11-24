type HeadingProps = {
  children: React.ReactNode
}
export function Heading(props: HeadingProps) {
  return <h1 className="text-3xl" {...props} />
}
