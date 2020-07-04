import { USER_SHOW, HOME_SHOW } from "../constants/actionTypes";
const initialstate = {
  drawershow: true,
  drawerslide: false,
};
export default (state = { drawershow: true, drawerslide: false }, action) => {
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
    default:
      return state;
  }
};
