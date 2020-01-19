import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

import SplashPage from "./components/SplashPage.js";
import Body from "./onboarding/Body.js";
import MainApp from "./application/MainApp.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: "Justin",
      lastName: "Zhang",
      email: "uofthacks@uofthacks.com",
      password: "qwertyuiop",
      startTime: 8,
      endTime: 18,
      examDays: 14,
      assignmentDays: 7,

      name: "",
      greeting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
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

  _startApp = (_firstName) => {
    this._next()
    this.setState({
      firstName: _firstName,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SplashPage
          next={this._next}
          currStep={this.state.currentStep}
          title="What Is Time Blocking?"
          image="peopleworking.png"
        />

        <Body
          next={this._next}
          start={this._startApp}
          currStep={this.state.currentStep}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          examDays={this.state.examDays}
          assignmentDays={this.state.assignmentDays}
        />

        <MainApp
          currStep={this.state.currentStep}
          name={this.state.firstName}
        />
      </React.Fragment>
    );
  }
}

export default App;
