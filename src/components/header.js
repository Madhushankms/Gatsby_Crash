import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: "oklch(0.21 0.006 285.885)",
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: "20px",
        textDecoration: `none`,
        fontWeight: `bold`,
        color: "white",
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
