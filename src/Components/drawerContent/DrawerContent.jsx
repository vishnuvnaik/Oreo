import React from "react";
import { connect } from "react-redux";
import { HOME_SHOW, USER_SHOW } from "../../constants/actionTypes";
import { NavLink } from "react-router-dom";
import {
  Home,
  Person,
  ShoppingCart,
  ArrowRightAlt,
  NavigateNext,
  Facebook,
  Twitter,
  Instagram,
  Apps,
  ArrowDropDown,
} from "@material-ui/icons";

import { Typography, Divider } from "@material-ui/core";
import "./DrawerContent.scss";

const mapStateToProps = (state) => {
  return {
    drawershow: state.drawershow,
    drawerslide: state.drawerslide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showHome: () =>
      dispatch({
        type: HOME_SHOW,
      }),
    showUser: () =>
      dispatch({
        type: USER_SHOW,
      }),
  };
};
class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      // drawershow: true,
      //drawerslide: false,
      open: false,
      openDash: false,
    };
    this.homeButton = () => this.props.showHome();
    this.userButton = () => this.props.showUser();
  }
  expansed = () => {
    this.setState({ open: !this.state.open });
  };
  expansedDash = () => {
    this.setState({ openDash: !this.state.openDash });
  };
  screenChanging = (text) => {
    this.setState({ choice: text });
    this.props.screenChanging(text);
  };
  render() {
    return (
      <div>
        <div className="topdrawerheader">
          <div className="homeIcon" onClick={() => this.homeButton()}>
            <div>
              <Home className="iconColor" />
            </div>
            <div className="oreo">Oreo</div>
          </div>
          <div className="homeIcon" onClick={() => this.userButton()}>
            <div>
              <Person className="iconColor" />
            </div>
            <div className="oreo">User</div>
          </div>
        </div>

        {this.props.drawershow === true ? (
          <div className={this.props.drawerslide ? "stretchRight" : null}>
            <div className="header">
              <div className="headerMain">-- MAIN</div>
            </div>
            <div className="header1">
              <div>
                <div className="expansion">
                  <div className="expansion">
                    <Home
                      className="cartIcon"
                      style={{ fontSize: "20px", paddingRight: "3px" }}
                    />
                    <div
                      className="ecommerceheader"
                      onClick={() => this.expansedDash()}
                    >
                      Dashboard
                    </div>
                  </div>
                  <div onClick={() => this.expansedDash()}>
                    <NavigateNext
                      className="cartIcon"
                      style={{ fontSize: "20px", marginTop: "10px" }}
                    />
                  </div>
                </div>
                <div className="expansion">
                  <div className="expansion">
                    <Apps
                      className="cartIcon"
                      style={{ fontSize: "20px", paddingRight: "3px" }}
                    />
                    <div
                      className="ecommerceheader"
                      onClick={() => this.expansedApp()}
                      style={{ cursor: "pointer" }}
                    >
                      App
                    </div>
                  </div>
                  <div onClick={() => this.expansedApp()}>
                    {this.state.open ? (
                      <NavigateNext
                        className="cartIcon"
                        style={{ fontSize: "20px", marginTop: "10px" }}
                      />
                    ) : (
                      <NavigateNext
                        className="cartIcon"
                        style={{ fontSize: "20px", marginTop: "10px" }}
                      />
                    )}
                  </div>
                </div>
                <div className="expansion">
                  <div className="expansion">
                    <ShoppingCart
                      className="cartIcon"
                      style={{ fontSize: "20px", paddingRight: "3px" }}
                    />
                    <div
                      className="ecommerceheader"
                      onClick={() => this.expansed()}
                      style={{ cursor: "pointer" }}
                    >
                      Ecommerce
                    </div>
                  </div>
                  <div onClick={() => this.expansed()}>
                    {this.state.open ? (
                      <ArrowDropDown
                        className="cartIcon"
                        style={{ fontSize: "20px", marginTop: "10px" }}
                      />
                    ) : (
                      <NavigateNext
                        className="cartIcon"
                        style={{ fontSize: "20px", marginTop: "10px" }}
                      />
                    )}
                  </div>
                </div>

                {this.state.open ? (
                  <div>
                    <div>
                      <NavLink
                        to={"/Dashboard"}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="expansion1"
                          onClick={() => this.screenChanging("Dashboard")}
                        >
                          <ArrowRightAlt
                            className="cartIcon"
                            style={{ fontSize: "22px", paddingRight: "3px" }}
                          />
                          <div className="ecommerce1">Dashboard</div>
                        </div>
                      </NavLink>
                      <NavLink
                        to={"/Product"}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="expansion1"
                          onClick={() => this.screenChanging("Product")}
                        >
                          <ArrowRightAlt
                            className="cartIcon"
                            style={{ fontSize: "22px", paddingRight: "3px" }}
                          />
                          <div className="ecommerce1">Product</div>
                        </div>
                      </NavLink>
                      <NavLink
                        to={"/Productlist"}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="expansion1"
                          onClick={() => this.screenChanging("Product List")}
                        >
                          <ArrowRightAlt
                            className="cartIcon"
                            style={{ fontSize: "22px", paddingRight: "3px" }}
                          />
                          <div className="ecommerce1">Product List</div>
                        </div>
                      </NavLink>
                      <NavLink
                        to={"/Productdetails"}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="expansion1"
                          onClick={() => this.screenChanging("Product Details")}
                        >
                          <ArrowRightAlt
                            className="cartIcon"
                            style={{ fontSize: "22px", paddingRight: "3px" }}
                          />
                          <div className="ecommerce1">Product Details</div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className={this.props.drawerslide ? "stretchLeft" : null}>
            <div className="userProfile" style={{ left: this.state.left }}>
              <div className="flexColumn userData">
                <img src="../../Assets/profileImg.jpg" width="100px" />
                <div variant="h5" className="profileName">
                  Michael
                </div>
                <div variant="body2" className="profileName">
                  UI UX Designer
                </div>

                <div className="flexRow">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                </div>

                <div>
                  <Typography className="profileAddress" variant="body1">
                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                  </Typography>
                </div>
                <div className="flexRow">
                  <div>
                    <div variant="h5">852</div>
                    <div variant="body2">Following</div>
                  </div>
                  <div>
                    <div variant="h5">13K</div>
                    <div variant="body2">Followers</div>
                  </div>
                  <div>
                    <div variant="h5">234</div>
                    <div variant="body2">Post</div>
                  </div>
                </div>
              </div>
              <div className="profileContact">
                <Divider />
                <div>
                  <Typography variant="body1">Email address:</Typography>
                  <Typography variant="body2">Michael@gmail.com</Typography>
                </div>
                <Divider />
                <div>
                  <Typography variant="body1">Phone:</Typography>
                  <Typography variant="body2">+81 25698 85214</Typography>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
