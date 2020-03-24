import React, { Component } from "react"
import nesttedgif from "./nestted-gif.gif"

class Footer extends Component {
  render() {
    return (
      <div className="gif">
        <img id="gif" src={nesttedgif} />
      </div>
    )
  }
}

export default Footer
