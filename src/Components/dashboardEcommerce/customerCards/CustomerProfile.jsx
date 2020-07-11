import React from "react";
import ProductLayout from "../productLayout/ProductLayout";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import "./Customerstyle.scss";
import customerData from "./Customer.json";
import ReactStars from "react-rating-stars-component";
const CustomerProfile = () => {
  return (
    <div className="profileContainer">
      <ProductLayout name="New" secndName="Customer Rating" width="57%">
        <div style={{ padding: "20px" }}>
          {customerData.profileDetails.map((data) => {
            return (
              <div className="customer" key={data.id}>
                <img src={data.img} alt="" />
                <div>
                  <h4>{data.Name}</h4>
                  <span>{data.Reply}</span>
                  <div className="customerDetail">
                    <div className="customerDetailModel">{data.Item}</div>
                    <div className="customerStar">
                      <ReactStars
                        size={15}
                        name="rate1"
                        count={5}
                        value={data.rating}
                      />
                    </div>
                  </div>
                  <div className="dateDisplay">{data.Date} </div>
                  <Divider />
                </div>
              </div>
            );
          })}
        </div>
      </ProductLayout>
      <div className="usersContainer">
        <div className="usersContainerHead">
          <h2>Matthew Deo</h2>
        </div>
        <div className="usersContainerImage">
          <img src="../Assets/avatarProfile.jpg" alt="m" />
          <div className="userIcon">
            <i>
              <Facebook />
            </i>
            <i>
              <Twitter />
            </i>
            <i>
              <Instagram />
            </i>
          </div>
          <span className="usersSpan">
            795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
          </span>
          <Divider />
          <div className="userSpanText">
            <div>
              <h4>98</h4>
              <span>Item Buy</span>
            </div>
            <div>
              <h4>78</h4>
              <span>Mobile</span>
            </div>
            <div>
              <h4>2,046$</h4>
              <span>Spent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
