import React, { Component, useEffect } from "react";
import "./ProductListStyle.scss";
import productlistdata from "./productList.json";
import ReactPaginate from "react-paginate";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import { REMOVE_PRODUCT, GET_PRODUCT } from "../../constants/actionTypes";

const ProductList = (props) => {
  return (
    <div style={{ height: "100%" }}>
      <div className="containerFluidlist">
        <div className="listContainerHead">
          <h1>Image</h1>
          <h2>Product Name</h2>
          <h3>Details</h3>
          <h4>Amount</h4>
          <h5>Stock</h5>
          <h6>Action</h6>
        </div>
        <Divider />
        {JSON.parse(localStorage.getItem("product")).map((data) => {
          return (
            <React.Fragment key={data.id}>
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
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </div>
                    <div className="imagButton1">
                      <IconButton
                        onClick={() => {
                          props.handleDelete(data.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
      <div className="bottomNav">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};
const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => dispatch(removeProduct(id)),
    //getProduct: () => dispatch(getProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
