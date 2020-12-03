import React, { Component, createRef } from "react";
import { Switch, Link, Route } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

class User extends Component {
  render() {
    console.log("user", this.props);
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12">
            <Link to="/user/list">用户列表</Link>
          </div>
          <div className="col-md-12">
            <Link to="/user/add">添加用户</Link>
            <button
              onClick={() => {
                localStorage.clear();
              }}
            >
              清除
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <Route path="/user/list" component={UserList} />
          <Route path="/user/add" component={UserAdd} />
        </div>
      </div>
    );
  }
}

export default User;
