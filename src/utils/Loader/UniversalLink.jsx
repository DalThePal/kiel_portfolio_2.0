import { Link } from "gatsby"

import { loadPage } from "./TransitionUtils"

export default function UniversalLink({
  to,
  transition = "slide",
  openInNewTab = false,
  forwardRef,
  type,
  children,
  ariaLabel,
  ...props
}) {
  if (type) {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={forwardRef}
        {...props}
        style={{
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    )
  }

  const internal = /^\/(?!\/)/.test(to)

  const handleClick = e => {
    e.preventDefault()

    if (openInNewTab || !internal) {
      window.open(to, "_blank")
    } else {
      loadPage(to, transition).catch((error) => {
        throw new Error(error)
      })
    }
  }

  return internal ? (
    <Link
      to={to}
      onClick={handleClick}
      ref={forwardRef}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <a
      href={to}
      onClick={handleClick}
      ref={forwardRef}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  )
}
