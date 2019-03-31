import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Utils from "./utils";
import "babel-polyfill";

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
          `You are a robot ! Motherfucker (${registrationResponse.score})`,
          "error"
        );
      else
        this.setMessage(
          `Login successful ! (${registrationResponse.score})`,
          "success"
        );
    } catch (error) {
      this.setMessage(error.toString(), "error");
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
