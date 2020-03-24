import React, { Component } from "react"
import values from "./Values.png"

class Values extends Component {
  render() {
    return (
      <div id="Values" className="About">
        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}>
          Values
        </h1>
        <div className="about_text">
          <img src={values} alt="values" className="values_image" />
          <p
            style={{
              padding: "50px",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            Nestted brings Family and Local Community to Social Media while
            helping people stay connected to their families, keep in touch with
            their real friends and get involved in their communities.
          </p>
        </div>
      </div>
    )
  }
}

export default Values
