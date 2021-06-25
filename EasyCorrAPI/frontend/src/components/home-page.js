  
import React, { Component } from "react";
import { render } from "react-dom";
import Hero from "./hero";
import TextSect from "./text-sect";
import PicSect from "./pic-sect";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero />
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
