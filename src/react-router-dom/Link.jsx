import React, { Component } from "react";
import Route from "./Route";
import Context from "./context";

class Link extends Component {
  static contextType = Context;
  state = {};
  render() {
    const { to, children } = this.props;
    return (
      <a
        {...this.props}
        onClick={() => {
          this.context.history.push(to);
        }}
      >
        {children}
      </a>
    );
  }
}

export default Link;
