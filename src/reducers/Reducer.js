import { USER_SHOW, HOME_SHOW } from "../constants/actionTypes";
import products from "../Components/product/productDetail.json";
const initialstate = {
  drawershow: true,
  drawerslide: true,
  displayCard: "description",
  currentProduct: products[0],
  productList: [],
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case "USER_SHOW":
      return {
        ...state,
        drawershow: false,
        drawerslide: true,
      };
    case "HOME_SHOW":
      return {
        ...state,
        drawershow: true,
        drawerslide: true,
      };
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
