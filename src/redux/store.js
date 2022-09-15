import createSagaMiddleware from "@redux-saga/core";
import Reducer from "./Reducer";
import Productsaga from "./Productsaga";

import {
  applyMiddleware,
  legacy_createStore,
  compose,
  combineReducers,
} from "redux";

// const dummyReducer = () => {
//   return 100;
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  Reducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Productsaga);

export default store;
// import { createStore, compose } from "redux";

// const store = compose(window.devToolsExtension && window.devToolsExtension())(
//   createStore
// )(rootReducer);
