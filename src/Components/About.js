import React, { Component } from "react"

class About extends Component {
  render() {
    return (
      <div id="About" className="About">
        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}>
          About
        </h1>
        <div className="about_text">
          <p
            style={{
              padding: "50px",
              fontSize: "1.2rem",
            }}
          >
            Our first priority is to strengthen families and empower
            communities. We want to create an environment that cultivates the
            relationships between individuals, their families, and their
            locales.
          </p>
        </div>
      </div>
    )
  }
}

export default About
