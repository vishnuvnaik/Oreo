import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Product from "./Components/product/Product.jsx";
import ProductList from "./Components/productList/ProductList.jsx";
import ProductDetails from "./Components/productDetails/ProductDetails.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/productList" component={ProductList} />
          <Route
            path="/productDetails"
            exact={true}
            component={(ProductDetails, Dashboard)}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
