import React, { Component } from "react";
import Context from "./context";

class Redirect extends Component {
  static contextType = Context;
  state = {};

  componentDidMount() {
    console.log("redirect");
    this.context.history.push(this.props.to);
  }
  render() {
    return null;
  }
}

export default Redirect;
