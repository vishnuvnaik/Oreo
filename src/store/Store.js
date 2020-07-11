import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "../reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
//import ProductDetailsReducer from "../reducers/ProductDetailsReducer";
// const rootReducer = combineReducers({
//   DrawerContentReducer,
// });

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
