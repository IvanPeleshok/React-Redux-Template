import React from "react";
import "./App.scss";

import { Route, Switch } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { ImageUpload } from "./components/ImageUpload/ImageUpload";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <div className="container">
          <Route path="/" exact component={ImageUpload} />
        </div>
      </Switch>
    </>
  );
};

export default App;
