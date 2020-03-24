import React from "react"
import Tilt from "react-tilt"
import brain from "./nestted.svg"

const Logo = () => {
  return (
    <div className="ma3 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 110, width: 110 }}
      >
        <div className="Tilt-inner pa3">
          <img
            style={{ paddingTop: "2px" }}
            src={brain}
            alt="logo"
            style={{ height: "110px", width: "110px", padding: "10px" }}
          />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
