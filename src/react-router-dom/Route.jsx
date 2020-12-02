import React, { Component } from "react";
import { pathToRegexp } from "path-to-regexp";
import Context from "./context";

class Route extends Component {
  static contextType = Context;
  state = {};
  render() {
    const { path, component: Component, exact } = this.props;
    const location = this.context.location;
    const regexp = pathToRegexp(path, [], { end: exact });
   
    console.log("123123");
    if (typeof path === 'object') {
        const { pathname, state } = path;
        if (regexp.test(location.pathname)) {
            return <Component location={location} state={state}/>;
          } else {
            return null;
          }
    }
    if (regexp.test(location.pathname)) {
      return <Component location={location} />;
    } else {
      return null;
    }
  }
}

export default Route;
