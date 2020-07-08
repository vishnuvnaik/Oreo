import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./productDetails.scss";

import productdata from "./ProductDetail.json";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import { DESCRIPTION, ABOUT, REVIEW } from "../../constants/actionTypes";

const mapStateToProps = (state) => {
  return {
    displayCard: state.displayCard,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    cardDescription: () =>
      dispatch({
        type: DESCRIPTION,
      }),
    cardReview: () =>
      dispatch({
        type: REVIEW,
      }),
    cardAbout: () =>
      dispatch({
        type: ABOUT,
      }),
  };
};
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "../../Assets/bag.png",
      index: "0",
      id: "",
      listId: "",
    };
    this.cardDescription = () => this.props.cardDescription();
    this.cardReview = () => this.props.cardReview();
    this.cardAbout = () => this.props.cardAbout();
  }
  imageButton = (img, id, index) => {
    this.setState({ image: img, listId: "", index: index });
  };
  card = (displayCard) => {
    this.setState({ displayCard: displayCard });
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

          <div className="containerDetails">
            <div className="flexRowDetails">
              <div className="colmDetails">
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
                    <div className="sideRow">
                      <div className="nameProd">
                        {productdata.DetailsList[this.state.index].title}
                      </div>
                      <div className="imageRow">
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
                          value={3.5}
                        />
                        <div className="reviewCount">41 reviews</div>
                      </div>
                      <div className="para1style">
                        {productdata.DetailsList[this.state.index].description}
                      </div>
                      <div className="para1style">
                        78% of buyers enjoyed this product! (23 votes)
                      </div>
                      <div className="imageRow">
                        <div className="h3Style">sizes:</div>
                        <div className="h3Style21">s</div>
                        <div className="h3Style2">m</div>
                        <div className="h3Style2">l</div>
                        <div className="h3Style2">xl</div>
                      </div>
                      <div className="imageRow">
                        <div className="h3Style">colors:</div>
                        <div className="colorContent">
                          <div className="color"></div>
                          <div className="color1"></div>
                          <div className="color2"></div>
                        </div>
                      </div>

                      <div className="imageRow">
                        <div className="cart">add to cart</div>
                        <div className="cartFav">
                          <FavoriteBorderIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="productItemdetails1">
                  <div className="roworder1">
                    <div
                      className="card2style "
                      onClick={() => {
                        this.card("description");
                      }}
                    >
                      Description
                    </div>
                    <div
                      className="card2style"
                      onClick={() => {
                        this.card("review");
                      }}
                    >
                      Review
                    </div>
                    <div
                      className="card2style"
                      onClick={() => {
                        this.card("about");
                      }}
                    >
                      About
                    </div>
                  </div>
                </div>

                <div className="productItemdetails1">
                  {this.state.displayCard === "description" ? (
                    <div className="description">
                      {productdata.DetailsList[this.state.index].description}
                    </div>
                  ) : this.state.displayCard === "review" ? (
                    <div>
                      <div className="description">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied.
                      </div>

                      {productdata.profileDetails.map((data) => {
                        return (
                          <div className="rowImage2" key={data.id}>
                            <div>
                              <img src={data.img} className="cardImgsize" />
                            </div>
                            <div className="rowSide">
                              <div>{data.Name}</div>
                              <div>{data.Reply}</div>
                              <div className="rowImage1">
                                <div className="rowImage">
                                  <div>{data.Item}</div>
                                  <div className="rating">
                                    <ReactStars
                                      size={15}
                                      name="rate1"
                                      count={5}
                                      value={data.rating}
                                    />
                                  </div>
                                </div>
                                <div>{data.Date}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : this.state.displayCard === "about" ? (
                    <div className="about">
                      <h4>WHERE DOES IT COME FROM?</h4>
                      <div className="about1">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </div>
                    </div>
                  ) : (
                    <div className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. There are many variations of passages
                      of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetails));
