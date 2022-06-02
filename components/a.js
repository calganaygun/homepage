import cn from 'classnames'

function A({ children = undefined, href = undefined, blank= undefined, className = undefined, ...props }) {
  const isBlank = blank
    ? {
        rel: 'noopener noreferrer',
        target: '_blank'
      }
    : {}

  return (
    <a
      href={href}
      {...isBlank}
      className={cn('hover:underline', className)}
      {...props}
    >
      {children}
    </a>
  )
}

export default A
