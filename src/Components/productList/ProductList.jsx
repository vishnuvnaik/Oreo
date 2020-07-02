import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./ProductListStyle.scss";
import productlistdata from "./productList.json";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="containerFluidlist">
        <div className="rowFlexlist">
          <div className="rowWiselist">
            <div className="Imagehead">Image</div>
            <div className="ProductlistNamehead">Product Name</div>
            <div className="detailshead">Details</div>
            <div className="amounthead">Amount</div>
            <div className="stockhead">Stock</div>
            <div className="Actionhead">Action</div>
          </div>
          <Divider />
          {productlistdata.map((data) => (
            <div key={data.id}>
              <div className="rowWiselist">
                <div className="Image">
                  <img src={data.img} className="imagesize" />
                </div>
                <div className="ProductlistName">{data.productName}</div>
                <div className="details">{data.details}</div>
                <div className="amount">{data.price}</div>
                <div className="stock">{data.stock}</div>
                <div className="Action">
                  <div className="rowlistbutton">
                    <div className="imagButton">
                      <EditIcon />
                    </div>
                    <div className="imagButton1">
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
