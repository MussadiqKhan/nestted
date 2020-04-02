import React, { Component } from "react"

class Main extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundColor: "black" }}>
        <h1 className="slogan" style={{ color: "white" }}>
          <b>Social Media for you and your mama</b>
        </h1>
        <p>
          Nestted is a social media platform that helps users stay in touch with
          their families. Like a hilarious sitcom, users share touching moments
          with the world.
        </p>
        <button className="join-today">Join Today</button>
      </div>
    )
  }
}

export default Main
