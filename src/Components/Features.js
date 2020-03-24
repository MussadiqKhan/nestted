import React, { Component } from "react"
import family from "./famprofile.svg"
import heart from "./Heartlock.svg"
import Engagement from "./engagment.svg"

class Features extends Component {
  render() {
    return (
      <div id="Features" className="About">
        <h1 style={{ margin: "auto", fontSize: "4rem", paddingBottom: "50px" }}>
          Features
        </h1>
        <div className="about_text_mob" style={{ marginBottom: "50px" }}>
          <p
            style={{
              padding: "50px",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            <b>Nestt:</b>
            <br />
            <br />
            Individual profiles are linked together to create a manageable
            family profile.
          </p>
          <img src={family} alt="mission" className="mission_image" />
        </div>
        <div className="about_text" style={{ marginBottom: "50px" }}>
          <img src={heart} alt="values" className="values_image" />
          <p
            style={{
              padding: "50px",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            <b> Safety & Accountability:</b> <br />
            <br />
            Secure messaging that notify spouse or parent of interactions with
            others outside of the family.
          </p>
        </div>
        <div className="about_text_mob" style={{ marginBottom: "50px" }}>
          <p
            style={{
              padding: "50px",
              textAlign: "justify",
              fontSize: "1.2rem",
            }}
          >
            <b> Engagement :</b>
            <br />
            <br />
            Families chat and share their moments with the world.
          </p>
          <img src={Engagement} alt="mission" className="mission_image" />
        </div>
      </div>
    )
  }
}

export default Features
