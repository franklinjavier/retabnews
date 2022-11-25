type HeadingProps = {
  children: React.ReactNode
}
export function Container(props: HeadingProps) {
  return <div className="m-auto w-full max-w-5xl" {...props} />
}
