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
      style={
        props.disabled
          ? {
              pointerEvents: 'none',
              cursor: 'default',
              textDecoration: 'line-through',
              color: 'var(--text-color)',
            }
          : {}
      }
      {...props}
    >
      {children}
    </a>
  )
}

export default A
