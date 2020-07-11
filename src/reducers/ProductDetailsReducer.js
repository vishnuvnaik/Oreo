import {
  DESCRIPTION,
  REVIEW,
  ABOUT,
  CURRENT_PRODUCT,
  ADD_PRODUCT,
} from "../constants/actionTypes.js";
import products from "../Components/product/productDetail.json";
const initialstate = {
  displayCard: "description",
  currentProduct: products[0],
  productList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "DESCRIPTION":
      return {
        ...state,
        displayCard: "description",
      };
    case "REVIEW":
      return {
        ...state,
        displayCard: "review",
      };
    case "ABOUT":
      return {
        ...state,
        displayCard: "about",
      };
    case "CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: products.find(
          (product) => product.id === action.payload
        ),
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };

    default:
      return state;
  }
};
