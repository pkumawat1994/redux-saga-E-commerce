import Productsaga from "./Productsaga";
import { all } from "redux-saga/effects";

export default function* RootSaga() {
  debugger
  yield all([
    Productsaga()
  ]);
}
