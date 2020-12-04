import React, { Component } from "react";
import { Route, Link } from "../react-router-dom";
import UserDetail from "./UserDetail";

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    console.log("userlist1", users);
    this.setState({ users });
  }
  render() {
    const { users } = this.state;
    console.log("userlist", users);
    return (
      <div>
        <ul className="col-md-6">
          {users.map((user) => (
            <Link key={user.id} to={`/user/list/${user.id}`}>
              <li>{user.name}</li>
            </Link>
          ))}
        </ul>
        <div className="col-md-6">
          {/* <Route path="/user/list/:id" component={UserDetail} /> */}
          <Route
            path="/user/list/:id"
            render={(props) => {
              const id = props.match.params.id;
              const users = JSON.parse(localStorage.getItem("users"));
              const user = users.find((user) => user.id == id);
              return <div>用户详情： {user && user.name}</div>;
            }}
          />
        </div>
      </div>
    );
  }
}
export default UserList;
