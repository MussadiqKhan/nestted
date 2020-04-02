import React, { Component } from "react"

class Join extends Component {
  render() {
    return (
      <div id="Join" className="Join">
        <h1 style={{ margin: "auto", fontSize: "3rem" }}>Join Today!</h1>
        <div className="form">
          <form>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button>Submit</button>{" "}
          </form>
        </div>
      </div>
    )
  }
}

export default Join
