import React, { Component } from "react";
import { pathToRegexp } from "path-to-regexp";
import Context from "./context";

class Route extends Component {
  static contextType = Context;
  state = {};
  render() {
    const location = this.context.location;
    const history = this.context.history;
    const pathname = location.pathname;
    const { path, component: Component, exact = false } = this.props;
    const regexp = pathToRegexp(path, [], { end: exact });
    const result = pathname.match(regexp);
    const porps = {
      location,
      history,
    };
    if (result) {
      if (Component) {
        return <Component {...porps} />;
      }
    }
    return null;
  }
}

export default Route;
