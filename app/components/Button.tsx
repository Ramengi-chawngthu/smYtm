
function Button({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <button className="button-6" role="button">{children}</button>
  )
}

export default Button