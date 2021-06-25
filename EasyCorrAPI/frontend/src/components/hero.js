import React, { Component } from "react";
import { render } from "react-dom";
import "../../static/css/index.css";
// import "../../static/css/bootstrap.css";
export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="hero-image">
            <div className="container rounded">
                <h1 className="hero-text display-1 mb-4 mt-4">
                    Gain Statistical Insights From <span style={{color: "#EE4B2B"}}>Reliable Data</span>
                </h1>
                <h5 className="hero-text display-1 mb-5">
                    We leverage the U.S Census Data API which contains millions of reliable datasets.
                </h5>
                <div className="d-grid gap-3 d-md-block">
                    <button className="btn btn-primary btn-lg mx-3" style= {{"color":"white"}} type="button">Try it out</button>
                    <button className="btn btn-secondary btn-lg mx-3" type="button">Sign Up</button>
                </div>
            </div>
        </div>
    );
  }
}