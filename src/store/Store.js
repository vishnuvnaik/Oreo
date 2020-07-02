import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import DrawerContentReducer from "../reducers/DrawerContentReducer";

const rootReducer = combineReducers({
  DrawerContentReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
