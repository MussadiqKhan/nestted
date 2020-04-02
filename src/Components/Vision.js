import React, { Component } from "react"
import binoculars from "./Vision.svg"

class Vision extends Component {
  render() {
    return (
      <div id="Mission" className="About">
        <img src={binoculars} alt="vision" className="values_image" />

        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}>
          Vision
        </h1>
        <div className="about_text">
          <img src={binoculars} alt="vision" className="values_image1" />

          <p
            style={{
              padding: "50px",
              fontSize: "1.2rem",
            }}
          >
            Five years from now Nestted will be one of the top social media
            sites in the world by strengthening families, empowering
            communities, promoting non-profits, community-orgs and enhancing
            lifestyles.
          </p>
        </div>
      </div>
    )
  }
}

export default Vision
