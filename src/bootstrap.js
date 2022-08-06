import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import Home from "./components/pages/home";
import Bio from "./components/pages/bio";
import Interests from "./components/pages/interested";
import Contacts from "./components/pages/contacts";

import "./style/main.scss";
import Navbar from "./components/navigation-bar/navbar";
function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/interests">
          <Interests />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
      <Navbar />
    </BrowserRouter>,

    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
