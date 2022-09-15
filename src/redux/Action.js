export const CartAction = () => {
  console.log("call action call");
  return {
    type: "PRODUCT_LIST",
  };
};
export const AddCartItem = (data) => {
  console.log("call action call", data);

  console.warn(data);
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};
export const RemoveCart = (index) => {
  return {
    type: "REMOVE_CART",
    payload: index,
  };
};
export const RegisterPost = (data) => {
  console.log("first", data);
  return {
    type: "REGISTER_USER",
    payload: data,
  };
};
export const LoginUser = (data) => {
  return {
    type: "LOGIN_USER",
    payload: data,
  };
};
export const Increament = (index) => {
  console.warn("action hello", index);

  return {
    type: "INCREAMENT",
    payload: index,
  };
};
export const decreament = (index) => {
  console.warn(" decreament action hello", index);

  return {
    type: "DECREAMENT",
    payload: index,
  };
};
