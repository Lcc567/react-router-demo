import React, { Component } from "react";

class UserDetail extends Component {
  state = {
    user: {},
  };

  render() {
    console.log("this.props.match", this.props.match);
		const id = this.props.match.params.id;
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.id == id);
    return <div>用户详情： {user && user.name}</div>;
  }
}

export default UserDetail;
