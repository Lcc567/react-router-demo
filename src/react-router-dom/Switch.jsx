import React, { Component } from "react";
import Context from "./context";
import { pathToRegexp } from "path-to-regexp";

class Switch extends Component {
  static contextType = Context;
  state = {};
  render() {
    console.log("this.props.children", this.props.children);
    if (!this.props.children) {
      return null;
    }
    for (let i = 0; i < this.props.children.length; i++) {
      const child = this.props.children[i];
      const { path, component: Component, exact = false, to } = child.props;
      //   redirect 重定向
      // if (to) {
      //   return child;
      // }

      const regxp = pathToRegexp(path, [], { end: exact });
      const pathname = this.context.location.pathname;
      const result = pathname.match(regxp);
      console.log("======", path, pathname, result);
      if (result) {
        return child;
      }
    }

  }
}

export default Switch;
