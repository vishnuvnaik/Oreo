import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Product from "./Components/product/Product.jsx";
import ProductList from "./Components/productList/ProductList.jsx";
import ProductDetails from "./Components/productDetails/ProductDetails.jsx";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/productList" component={ProductList} />
          <Route path="/productDetails" component={ProductDetails} />
        </Switch>
      </Router>
    );
  }
}
export default App;
