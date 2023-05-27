import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `10px`,
      padding: `10px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `flex-start`,
    }}
  >
    <img
      alt="Software for Love logo"
      height={50}
      style={{ margin: `0 15px 0 0` }}
      src="https://avatars.githubusercontent.com/u/63218720?s=200&v=4"
    />
    <button
      style={{
        margin: `15px`,
        padding: `10px`,
        fontSize: `var(--font-sm)`,
        backgroundColor: `#d91a1a`,
        borderRadius: `5px`,
        border: `none`,
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Link to="/" style={{ textDecoration: `none`, color: `white` }}>
        Home
      </Link>
    </button>
    <button
      style={{
        margin: `15px`,
        padding: `10px`,
        fontSize: `var(--font-sm)`,
        borderRadius: `5px`,
        backgroundColor: `#d91a1a`,
        border: `none`,
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Link to="/page-2" style={{ textDecoration: `none`, color: `white` }}>
        Page 2
      </Link>
    </button>
    <button
      style={{
        margin: `15px`,
        padding: `10px`,
        fontSize: `var(--font-sm)`,
        borderRadius: `5px`,
        backgroundColor: `#d91a1a`,
        border: `none`,
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <Link
        to="/using-typescript"
        style={{ textDecoration: `none`, color: `white` }}
      >
        Typescript
      </Link>
    </button>
  </header>
)

export default Header
