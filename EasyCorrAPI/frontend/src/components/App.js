import React, { Component } from "react";
import { render } from "react-dom";
import About from "./about";
import Homepage from "./home-page";
import NavbarOut from "./navbar-out"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarOut />
        <Router>
          <Switch>
              <Route exact path="/">
                  <Homepage />
              </Route>
              <Route path="/about" component={About} />
          </Switch>
        </Router>        
      </div>

    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);