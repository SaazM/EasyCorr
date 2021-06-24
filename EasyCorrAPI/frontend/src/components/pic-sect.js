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
        <img src="https://explain.ninja/wp-content/uploads/2021/01/ex1-e1621425660819.jpg" class="img-fluid mt-3" style={{"border-radius": "0.5rem"}} alt=""/>
    );
  }
}

