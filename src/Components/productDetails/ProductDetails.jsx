import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./productDetails.scss";
import productdata from "./ProductDetail.json";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReactStars from "react-rating-stars-component";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "../../Assets/cycle.png",
      index: "0",
      id: "",
      listId: "",
    };
  }
  imageButton = (img, id, index) => {
    this.setState({ image: img, listId: "", index: index });
  };

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
                        <img src={this.state.image} className="bigimg" />
                      </div>
                      <div className="mapDiv">
                        {productdata.Products.map((data, index) => (
                          <div
                            key={data.id}
                            onClick={() =>
                              this.imageButton(data.img, data.id, index)
                            }
                          >
                            <img src={data.img} className="smallImage" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rowSide">
                      <div className="nameProd">
                        {productdata.DetailsList[this.state.index].title}
                      </div>
                      <div className="clockrow">
                        <div className="priceProd">Current Price:</div>
                        <div className="h3Stylecolor">
                          {productdata.DetailsList[this.state.index].price}
                        </div>
                      </div>
                      <div className="reviews">
                        <ReactStars
                          size={20}
                          name="rate1"
                          count={5}
                          value={
                            productdata.DetailsList[this.state.index].rating
                          }
                        />
                        <div className="reviewCount">41 reviews</div>
                      </div>
                      <div className="para1style">
                        {productdata.DetailsList[this.state.index].description}
                      </div>
                      <div className="para1style">
                        78% of buyers enjoyed this product! (23 votes)
                      </div>
                      <div className="clockrow">
                        <div className="h3Style">sizes:</div>
                        <div className="h3Style21">s</div>
                        <div className="h3Style2">m</div>
                        <div className="h3Style2">l</div>
                        <div className="h3Style2">xl</div>
                      </div>
                      <div className="clockrow">
                        <div className="h3Style">colors:</div>
                        <div className="colorContent">
                          <div className="color"></div>
                          <div className="color1"></div>
                          <div className="color2"></div>
                        </div>
                      </div>

                      <div className="clockrow">
                        <div className="cart">add to cart</div>
                        <div className="cart">
                          <FavoriteBorderIcon />
                        </div>
                      </div>
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
