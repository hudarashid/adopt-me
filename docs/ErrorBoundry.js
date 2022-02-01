//mostly took this from the React docs
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundry extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //log this to Sentry, Azure Monitor, New Relic, TrackJS (when user get error, sent msg to this system)
    console.error("ErrorBoundry caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000); //redirect user to home page after 5sec
  }

  // componentDidUpdate() {  --> this method is not called for initial render!
  //   console.log("componentDidUpdate");
  //   if (this.state.hasError) {
  //   }
  // }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to go back
          to home page or wait for 5 seconds..
        </h2>
      );
    }
    return this.props.children; //if no error
  }
}

export default ErrorBoundry;
