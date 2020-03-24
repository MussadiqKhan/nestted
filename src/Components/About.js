import React, { Component } from "react"
import Particles from "react-particles-js"

class About extends Component {
  render() {
    return (
      <div id="About" className="About">
        <Particles
          className="particles1"
          params={{
            particles: {
              number: {
                value: 560,
                density: {
                  enable: true,
                  value_area: 1900,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.2,
              },
              size: {
                value: 1.5,
              },
            },

            retina_detect: true,
          }}
        />
        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}>
          About
        </h1>
        <div className="about_text">
          <p
            style={{
              padding: "50px",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            Our first priority is to strengthen families and empower
            communities. We want to create an environment that cultivates the
            relationships between individuals, their families, and their
            locales. Our mission is to promote nonprofits and community-orgs and
            build a platform for successful outreach. We strive to enhance
            lifestyles with an innovative approach that results in happy lives
            as well as shape a better future.
          </p>
        </div>
      </div>
    )
  }
}

export default About
