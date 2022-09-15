import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";
function apiCall() {
  return axios.get("http://localhost:3002/arr").then((res) => res.data);
}
function* fetchProduct() {
  try {
    const resData = yield call(apiCall); // call api by call()
    yield put({ type: "GET_DATA", data: resData }); // put someting dispatch in saga send data reducer by check type
  } catch (e) {
    yield put({ type: "ERROR", data: e });
  }
}
function* addProductInCart(a) {
  console.log("aaaa", a);
  console.warn("aaaa", a);

  try {
    yield put({ type: "ADD_MY_CART", payload: a.payload });
  } catch (a) {
    console.log("eroor call");
  }
}
function* removeCart(i) {
  console.log(7879, i.payload);
  try {
    yield put({ type: "DELETE_CART_ITEM", data: i.payload });
  } catch {}
}
async function newRegisterPost(data) {
  console.log("apidata", data);

  //Know data length for run api
  const lenthdata = await axios
    .get("http://localhost:3002/register")
    .then((res) => res.data.length);
  console.log("datatln", lenthdata);

  const user = {
    id: lenthdata + 1,
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    password: data.password,
  };
  console.log(user);
  return axios.post("http://localhost:3002/register", user).then((res) => res);
}
function* registerUser(data) {
  try {
    const resData = yield call(newRegisterPost, data.payload);

    console.log("fffff", resData);
    yield put({ type: "NEW_REGISTER", payload: resData });
  } catch (e) {
    yield put({ type: "ERROR", payload: e });
  }
}
const loginapi = async (data) => {
  return axios.get("http://localhost:3002/register").then((res) =>
    res.data.filter((ele) => {
      if (ele.email == data.email && ele.password == data.password) {
        localStorage.setItem("user", JSON.stringify(ele));
        return ele;
      }
    })
  );

  // resdttt.data.filter((ele) => {
  //   console.log(data);
  //   if (ele.email == data.email && ele.password == data.password) {
  //     return ele;
  //   }
  // });
};
function* Create_Login(data) {
  try {
    const login_res = yield call(loginapi, data.payload);
    toast.success("login user");
    yield put({ type: "LOGIN_USER_SESSION", payload: login_res });
  } catch (e) {
    toast.error("login Failed");
  }
}

function* increament(id) {
  try {
    console.warn("saga hello", id.payload);
   
      yield put({ type: "INCREAMENT_QUANTITY", payload: id.payload });
   
  } catch {
    console.log("error");
  }
}
function* decreament(id) {
  console.warn("decreament saga call 4444444444", id);
  try {
    yield put({ type: "DECREAMENT_QUANTITY", payload: id.payload });
  } catch {
    console.log("errrooorrr decreament");
  }
}

function* Productsaga() {
  yield takeEvery("PRODUCT_LIST", fetchProduct);
  yield takeEvery("ADD_TO_CART", addProductInCart);
  yield takeEvery("REMOVE_CART", removeCart);
  yield takeEvery("REGISTER_USER", registerUser);
  yield takeEvery("LOGIN_USER", Create_Login);
  yield takeEvery("INCREAMENT", increament);
  yield takeEvery("DECREAMENT", decreament);
}
export default Productsaga;
