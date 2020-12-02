import React, { Component } from "react";
import Context from "./context";

class HashRouter extends Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: undefined,
    },
  };

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || "/",
        },
      });
    });
    window.location.hash = window.location.hash || "/";
  }
  render() {
    console.log("location", window.history);
    const value = {
      location: this.state.location,
      history: {
          location: this.state.location,
          push: (to) => {
              window.location.hash = to
          }
      }
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default HashRouter;
