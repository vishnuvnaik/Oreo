import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Product from "./Components/product/Product.jsx";
import ProductList from "./Components/productList/ProductList";
import ProductDetails from "./Components/productDetails/ProductDetails";

class App extends Component {
  render() {
    return (
      <Router>
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
