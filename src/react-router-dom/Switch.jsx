import React, { Component } from "react";
import Context from "./context";
import { pathToRegexp } from "path-to-regexp";

class Switch extends Component {
  static contextType = Context;
  state = {};
  render() {
    if (!this.props.children) {
      return null;
    }
    for (let i = 0; i < this.props.children.length; i++) {
      const child = this.props.children[i];
      const { path, component: Component, exact = false, to } = child.props;
      //   redirect 重定向
      if (to) {
        return child;
      }

      const regxp = pathToRegexp(path, [], { end: exact });
      const pathname = this.context.location.pathname;
      const result = pathname.match(regxp);
      if (result) {
        return child;
      }
    }
    return null;
  }
}

export default Switch;
