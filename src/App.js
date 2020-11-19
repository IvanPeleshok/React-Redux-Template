import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import { Login } from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Switch>
        <div className="container">
          <Route path="/" exact component={Login} />
        </div>
      </Switch>
    </>
  );
};

export default App;
