import React, { Component } from "react"
import values from "./values.svg"

class Values extends Component {
  render() {
    return (
      <div id="Values" className="About">
        <img
          src={values}
          alt="values"
          className="values_image"
          style={{
            margin: "0 auto",
          }}
        />

        <h1
          className="values_heading"
          style={{ margin: "auto", fontSize: "4rem", paddingBottom: "20px" }}
        >
          Values
        </h1>
        <div className="about_text">
          <img src={values} alt="values" className="values_image1" />
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
