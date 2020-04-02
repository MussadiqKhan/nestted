import React, { Component } from "react"
import "../styles/styles.css"
import Main from "../Components/Main"
import About from "../Components/About"
import Join from "../Components/Join"
import Features from "../Components/Features"
import Navigation from "../Components/Navigation"
import Mission from "../Components/Mission"
import Vision from "../Components/Vision"
import Values from "../Components/Values"
import Footer from "../Components/footer"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <Features />
        <About />
        <Values />
        <Mission />
        <Vision />
        <Join />
        <Footer />
      </div>
    )
  }
}

export default Home
