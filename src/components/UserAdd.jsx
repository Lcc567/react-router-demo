import React, { Component, createRef } from "react";

class UserAdd extends Component {
  inputRef = React.createRef();

  state = {};

  handleAdd = (e) => {
    e.preventDefault();
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const name = this.inputRef.current.value;
    console.log("------", name);
    const user = {
      id: Date.now(),
      name,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };
  render() {
    console.log("user", this.props);
    return (
      <form>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleAdd}>添加</button>
      </form>
    );
  }
}

export default UserAdd;
