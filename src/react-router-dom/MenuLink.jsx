import React, { Component } from "react";
import Context from "./context";
import { Route, Link } from "../react-router-dom";
import "./MenuLink.css";

class MenuLink extends Component {
  static contextType = Context;
  state = {};
  render() {
    const { to, children, exact } = this.props;
    return (
      <Route
        path={typeof to == "object" ? to.pathname : to}
        exact={exact}
        children={(props) => {
          console.log("props", props);
          return (
            <li className={props.match ? "active" : ""}>
              <Link to={to}>{children}</Link>
            </li>
          );
        }}
      ></Route>
    );
  }
}

export default MenuLink;
