import React, { Component } from "react";

class Login extends Component {
  handleLogin = () => {
    localStorage.setItem("logined", true);
    this.props.history.push(this.props.location.state.from);
  };
  render() {
      console.log('login');
    return <button onClick={this.handleLogin}>登录</button>;
  }
}

export default Login;
