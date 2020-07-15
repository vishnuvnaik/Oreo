import {
  CURRENT_PRODUCT,
  ADD_PRODUCT,
  SEARCH,
  GET_PRODUCT,
} from "./actionTypes";
export const setCurrentProduct = (id) => {
  return {
    type: CURRENT_PRODUCT,
    payload: id,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const search = (char) => {
  return {
    type: SEARCH,
    payload: char,
  };
};
