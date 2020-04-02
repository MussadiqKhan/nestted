import React, { Component } from "react"
import nesttedgif from "./nestted-gif.gif"
import brain from "./nestted.svg"

class Footer extends Component {
  render() {
    return (
      <div className="gif">
        <img id="gif" src={nesttedgif} />
        <img src={brain} alt="logo" style={{ height: "80px", width: "80px" , margin: '0 auto' }} />
      </div>
    )
  }
}

export default Footer
