import React, { Component } from "react";
import { Route, Redirect } from "../react-router-dom";

class ProtectRoute extends Component {
  render() {
    const { path, component: Component } = this.props;
    return (
      <Route
        path={path}
        render={(props) => {
          const logined = localStorage.getItem("logined");
          console.log("------", logined, props);
          return logined ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            />
          );
        }}
      />
    );
  }
}

export default ProtectRoute;
