import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Utils from "./utils";
import "babel-polyfill";

addScript(
  "https://www.google.com/recaptcha/api.js?render=6Lfx9JoUAAAAAOHf0pQafcxL6BKl_Y1ixRpfrJ0G"
);
addScript("https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js");

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    error: "",
    open: false,
    variant: "error",
    message: ""
  };
  loginHandler = async e => {
    try {
      const token = await Utils.getReCaptchaToken();
      let registrationResponse = await Utils.registration(token, {});
      if (registrationResponse.score < 0.5)
        this.setMessage(
          `You are a robot ! (${registrationResponse.score})`,
          "error"
        );
      else
        this.setMessage(
          `Login successful ! (${registrationResponse.score})`,
          "success"
        );
    } catch (error) {
      this.setMessage("Unknown error occurred :( ! ", "error");
    }
  };
  setMessage = (message, variant) => {
    this.setState({
      message,
      variant,
      open: true
    });
  };
  toggleSnackBar = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  componentDidMount() {
    // laoding particle js
    let interval = setInterval(() => {
      if (window.particlesJS) {
        console.log("particle js loaded");
        clearInterval(interval);
        window.particlesJS.load("particles", "config.json");
      }
    }, 500);
  }
  render() {
    return (
      <React.Fragment>
        <Login
          loginHandler={this.loginHandler}
          toggleSnackBar={this.toggleSnackBar}
          {...this.state}
        />
      </React.Fragment>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function addScript(src) {
  var s = document.createElement("script");
  s.setAttribute("src", src);
  document.body.appendChild(s);
}
