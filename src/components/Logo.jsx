import React, { Component } from "react";
import { withRouter } from "../react-router-dom";

class Logo extends Component {
  state = {};
  render() {
    console.log('Logo');
    return <div className='navbar-brand' onClick={() => this.props.history.push('/')}>logo</div>;
  }
}


export default withRouter(Logo);

