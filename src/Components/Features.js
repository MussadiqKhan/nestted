import React, { Component } from "react"
import family from "./famprofile.svg"
import heart from "./Heartlock.svg"
import Engagement from "./engagement.svg"
import tribal from "./tribal.svg"
import ReactCardCarousel from "react-card-carousel"

class Features extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    }
  }

  static get CARD_STYLE() {
    return {
      height: "380px",
      width: "280px",
      paddingTop: "20px",
      textAlign: "center",
      background: "black",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    }
  }
  render() {
    return (
      <div>
        <div style={Features.CONTAINER_STYLE}>
          <ReactCardCarousel>
            <div className="" style={Features.CARD_STYLE}>
              <img src={family} alt="mission" style={{ width: "230px" }} />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                Individual profiles are linked together to create a manageable
                family profile.
              </p>
            </div>
            <div className="" style={Features.CARD_STYLE}>
              <img src={heart} alt="values" style={{ width: "200px" }} />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                Secure messaging that notify spouse or parent of interactions
                with others outside of the family.
              </p>
            </div>
            <div className="" style={Features.CARD_STYLE}>
              <img src={Engagement} alt="mission" style={{ width: "200px" }} />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  padding: "10px",
                }}
              >
                <br />
                <br />
                Families chat and share their moments with the world.
              </p>
            </div>
          </ReactCardCarousel>
        </div>
        <img src={tribal} style={{ width: "100%", marginLeft: "-5px" }} />
      </div>
    )
  }
}

export default Features
