import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "black",
      }}
    >
      <p className=" ">Home</p>
      <Link to="/#Features">
        <p className="">Features</p>
      </Link>
      <Link to="/#About">
        <p className="">About</p>
      </Link>{" "}
      <Link to="/#Join">
        <p className="">Join Beta</p>
      </Link>{" "}
    </nav>
  )
}

export default Navigation
