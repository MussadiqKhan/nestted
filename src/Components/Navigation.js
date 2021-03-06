import React from "react"
import { Link } from "gatsby"
import name from "./name.svg"
import brain from "./nestted.svg"

const Navigation = props => {
  function click() {
    props.updated()
  }
  return (
    <section class="top-nav">
      <div className="">
        <img src={brain} alt="logo" style={{ height: "60px", width: "60px" }} />
        <img
          className="name"
          src={name}
          alt="logo"
          style={{ height: "60px", width: "100px", marginLeft: "80px" }}
        />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <Link to="" onClick={click}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#Features" onClick={click}>
            Features
          </Link>
        </li>
        <li>
          <Link to="/#About" onClick={click}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#Join" onClick={click}>
            Join Today
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Navigation
