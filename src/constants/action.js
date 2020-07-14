import { CURRENT_PRODUCT, ADD_PRODUCT, SEARCH } from "./actionTypes";
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
export const removeProduct = (id) => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    payload: id,
  };
};
export const search = (char) => {
  return {
    type: SEARCH,
    payload: char,
  };
};
