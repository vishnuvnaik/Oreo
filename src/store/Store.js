import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import DrawerContentReducer from "../reducers/DrawerContentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductDetailsReducer from "../reducers/ProductDetailsReducer";
const rootReducer = combineReducers({
  DrawerContentReducer,
  ProductDetailsReducer,
});

const store = createStore(
  DrawerContentReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
