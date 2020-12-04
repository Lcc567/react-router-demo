import React, { Component, createRef } from "react";
import { Route, MenuLink } from "../react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

class User extends Component {
  render() {
    console.log("user", this.props);
    return (
      <div className="row">
        <div className="col-md-2 nav navbar">
          <ul>
            <li className="nav">
              <MenuLink to="/user/list">用户列表</MenuLink>
            </li>
            <li className="nav">
              <MenuLink to="/user/add">添加用户</MenuLink>
            </li>
          </ul>
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
