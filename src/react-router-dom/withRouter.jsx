import React, { Component } from "react";
import { Route } from "./";


export default (Com) => {
    console.log('withrouter');
    return () => <Route component={Com} />
};
