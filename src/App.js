import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

import SplashPage from "./components/SplashPage.js";
import Body from "./onboarding/Body.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  //Gets the app to the next screen
  _next = () => {
    let cstep = this.state.currentStep + 1;

    this.setState(
      {
        currentStep: cstep
      },
      () => {
        console.log(this.state.currStep);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <AnimatePresence>
          <SplashPage
            next={this._next}
            currStep={this.state.currentStep}
            title="What Is Time Blocking?"
            content="
                        Why put tasks in a to-do list and forget to do them, when you can schedule them automatically in your calendar?
                        "
            image="peopleworking.png"
          />
        </AnimatePresence>

        <AnimatePresence>
          <Body next={this._next} currStep={this.state.currentStep} />
        </AnimatePresence>
      </React.Fragment>
    );
  }
}

export default App;
