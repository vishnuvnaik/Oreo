import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import DrawerContentReducer from "../reducers/DrawerContentReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  DrawerContentReducer,
});

const store = createStore(
  DrawerContentReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
