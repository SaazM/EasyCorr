import React from "react";
import { render } from "react-dom";
import About from "./about";
import Homepage from "./home-page";
import NavbarOut from "./navbar-out";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){

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
export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);