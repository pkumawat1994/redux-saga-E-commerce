import { toast } from "react-toastify";

const initialData = {
  data: [],
  myCartdata: [],
  dt: [],
  login_user: [],
  error: [],
};
const Reducer = (state = initialData, action) => {
  console.log("Reducer call", action.payload);
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.data,
      };
    case "ADD_MY_CART":
      console.warn("reducer", action.payload);
      const mcrtdt = [...state.myCartdata];
      mcrtdt.push(action.payload);

      return {
        ...state,
        myCartdata: mcrtdt,
      };
    case "DELETE_CART_ITEM":
      console.log("firstfgdfg");
      return {
        ...state,
        myCartdata: state.myCartdata.filter((ele) => ele.id !== action.data),
      };
    case "NEW_REGISTER":
      const copyDt = [...state.dt]; //create copy of array on copyDt
      copyDt.push(action.payload);
      return {
        ...state,
        dt: copyDt,
      };

    case "LOGIN_USER_SESSION":
      const userLogin = [...state.login_user]; //create copy of array on copyDt
      userLogin.push(action.payload);
      return {
        ...state,
        login_user: userLogin,
      };

    case "INCREAMENT_QUANTITY":
      console.log("inc", action.payload);
      console.log("quantity");

      var modifyCart = state.myCartdata.map((object) => {
        if (object.id === action.payload) {
          console.log("dfdfdfdffgdsfsdgfghdf", object.quantity + 1);
          // 👇️ change value of name property
          return { ...object, quantity: object.quantity + 1 };
        }
        return object;
      });

      return {
        ...state,
        myCartdata: modifyCart,
      };
    case "DECREAMENT_QUANTITY":
      console.log("dec", action.payload);

      const modifyQuantity = state.myCartdata.map((object) => {
        console.log(11111111, object.id);

        if (object.id === action.payload) {
          console.log("DECRmnt", object.quantity - 1);
          // 👇️ change value of name property
          return { ...object, quantity: object.quantity - 1 };
        }
        return object;
      });
      console.log("999999999", modifyQuantity);

      return {
        ...state,
        myCartdata: modifyQuantity,
      };

    case "ERROR":
      const newError = [...state.error]; //create copy of array on copyDt
      newError.push(action.payload);
      return {
        error: newError,
      };
    default:
      return state;
  }
};
export default Reducer;
