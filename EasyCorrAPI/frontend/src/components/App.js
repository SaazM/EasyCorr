import React, { Component } from "react";
import { render } from "react-dom";
import NavbarOut from "./navbar-out";
import Hero from "./hero";
import TextSect from "./text-sect";
import PicSect from "./pic-sect"
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarOut/>
        <Hero/>
        <div className="container-xl mt-5 px-3">
          <div className="row gx-5">
            <div className="col-12 col-md-6">
              <TextSect/>
            </div>
            <div className="col-12 col-md-6">
              <PicSect/>
            </div>
            <div className="col-12 col-md-6">

            </div>
            <div className="col-12 col-md-6">

            </div>
          </div>
        </div>
      </div>  
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);