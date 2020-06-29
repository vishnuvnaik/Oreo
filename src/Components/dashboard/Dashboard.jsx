import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppBarComponent from "../Appbar/Appbar";
import ProductData from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AppBarComponent />
        <ProductData />
      </div>
    );
  }
}
export default withRouter(Dashboard);
