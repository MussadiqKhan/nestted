import React, { Component } from "react"
import Particles from "react-particles-js"

class Main extends Component {
  render() {
    return (
      <div className="main" style={{ backgroundColor: "black" }}>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 350,
                density: {
                  enable: true,
                  value_area: 2100,
                },
              },
            },
          }}
        />
        <h1 className="slogan" style={{ color: "white", margin: "auto" }}>
          Social Media for you and your mama
        </h1>
      </div>
    )
  }
}

export default Main
