import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <div style={{ background: "oklch(0.705 0.015 286.067)", paddingTop: "10px" }}>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
    </ul>
  </div>
)

export default Menu
