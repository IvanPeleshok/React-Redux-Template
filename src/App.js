import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Block } from "./components/Block";


const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <div className="container">
          <Route path="/" exact component={Block} />
        </div>
      </Switch>
    </>
  );
};

export default App;
