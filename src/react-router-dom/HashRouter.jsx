import React, { Component } from "react";
import Context from "./context";

class HashRouter extends Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1) || '/',
      state: undefined,
    },
  };

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        location: {
          ...this.state.location,
          state: this.locationState,
          pathname: window.location.hash.slice(1) || "/",
        },
      });
    });
    window.location.hash = window.location.hash || "/";
  }
  render() {
    const value = {
      location: this.state.location,
      history: {
        location: this.state.location,
        push: (to) => {
          if (typeof to == "object") {
            console.log('======', to);
            this.locationState = to.state;
            window.location.hash = to.pathname;
          } else {
            window.location.hash = to;
          }
        },
      },
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default HashRouter;
