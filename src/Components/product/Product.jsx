import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Typography } from "@material-ui/core";
import "./productStyle.scss";
import productData from "./productDetail.json";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageOver: false,
      choice: "",
    };
  }
  handleMouseClick = () => {
    this.props.history.push("/productDetails");
  };
  screenChanging = (text) => {
    this.setState({ choice: text });
    this.props.screenChanging(text);
    this.props.history.push("/productDetails");
  };
  render() {
    let productCard = productData.map((product) => {
      return (
        <div className="productCard" key={product.id}>
          <img
            src={product.img}
            width="100%"
            onClick={() => this.screenChanging("Product Details")}
          />
          <div className="productData flexColumn">
            <div className="productName" variant="body1">
              {product.productName}
            </div>
            <div variant="body2">
              <div className="flexRow productCostRow">
                <div>{product.price}</div>
                <div className="redFont">{product.discount}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="containerMain">
        <div>
          <div className="contentsNav">
            <div id="productWelcomeMsg">
              <div className="prodFont">Product</div>
              <div className="welcomeFont">Welcome to Oreo</div>
            </div>
            <div>
              <div className="contentRoute">
                <HomeIcon />
                <div>Oreo / eCommerce / Product</div>
              </div>
            </div>
          </div>

          <div className="productCards">{productCard}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Product);
