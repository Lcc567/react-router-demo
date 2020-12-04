import React, { Children, Component } from "react";
import { pathToRegexp } from "path-to-regexp";
import Context from "./context";

class Route extends Component {
  static contextType = Context;
  state = {};
  render() {
    const location = this.context.location;
    const history = this.context.history;
    const pathname = location.pathname;
    const {
      path = "/",
      component: Component,
      exact = false,
      render,
      children,
    } = this.props;

    // 处理路径参数
    let keys = [];

    const regexp = pathToRegexp(path, keys, { end: exact });
    const result = pathname.match(regexp);
    const props = {
      location,
      history,
    };
    if (result) {
      const params = {};
      keys.reduce((pre, cur, index) => {
        pre[cur.name] = result[index + 1];
        return pre;
      }, params);
      const match = {
        url: result[0],
        params,
      };
      const props = {
        location,
        history,
      };
      props.match = match;
      if (Component) {
        return <Component {...props} />;
      } else if (render) {
        return render(props);
      } else if (children) {
        return children(props);
      }
    } else {
      if (children) {
        return children(props);
      }
    }

    return null;
  }
}

export default Route;
