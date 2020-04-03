import React from "react"
import { Link } from "gatsby"
import name from "./name.svg"
import brain from "./nestted.svg"

const Navigation = () => {
  return (
    <section class="top-nav">
      <div className="">
        <img src={brain} alt="logo" style={{ height: "60px", width: "60px" }} />
        <img className='name' src={name} alt="logo" style={{ height: "60px", width: "100px", marginLeft: '80px' }} />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/#Features">Features</Link>
        </li>
        <li>
          <Link to="/#About">About</Link>
        </li>
        <li>
          <Link to="/#Join">Join Today</Link>
        </li>
      </ul>
    </section>
    // <nav
    //   style={{
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     backgroundColor: "black",
    //   }}
    // >
    //   <p className=" ">Home</p>
    //   <Link to="/#Features">
    //     <p className="">Features</p>
    //   </Link>
    //   <Link to="/#About">
    //     <p className="">About</p>
    //   </Link>{" "}
    //   <Link to="/#Join">
    //     <p className="">Join Beta</p>
    //   </Link>{" "}
    // </nav>
  )
}

export default Navigation
