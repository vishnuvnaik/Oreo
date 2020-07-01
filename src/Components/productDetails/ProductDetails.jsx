import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./productDetails.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="containerMain">
        <div>
          <div className="contentsNav">
            <div id="productWelcomeMsg">
              <div className="prodFont">Product Details</div>
              <div className="welcomeFont">Welcome to Oreo</div>
            </div>
            <div>
              <div className="contentRoute">
                <HomeIcon />
                <div>Oreo / eCommerce / Product Details</div>
              </div>
            </div>
          </div>

          <div className="containerFluiddetails">
            <div className="rowFlexdetails">
              <div className="coldetails">
                <div className="productItemdetails">
                  <div className="roworder">
                    <div className="columnWise">
                      <div>
                        <img src="../../Assets/cycle.png" className="bigimg" />
                      </div>
                      <div>add images here</div>
                    </div>
                    <div className="nameDetails">
                      <div className="nameProd">Simple Black Clock</div>
                      <div className="priceProd">Current Price: $180</div>
                      <div className="prodDesc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </div>

                      <div className="buyersEnjoy">78% of buyers enjoyed this product! (23 votes)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
