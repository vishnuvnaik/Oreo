import { DESCRIPTION, REVIEW, ABOUT } from "../constants/actionTypes.js";

const initialstate = {
  displayCard: "description",
};
export default (state = { displayCard: "description" }, action) => {
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

    default:
      return state;
  }
};
