import React, { Component } from "react";

class UserDetail extends Component {
  state = {
    user: {},
  };

  render() {
		const id = this.props.match.params.id;
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.id == id);
    console.log("this.props.match", this.props.match, user);
    return <div>用户详情： {user.name}</div>;
  }
}

export default UserDetail;
