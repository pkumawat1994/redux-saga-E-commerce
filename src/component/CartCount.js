import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, Increament } from "../redux/Action";
import { RemoveCart } from "../redux/Action";

function CartCount(props) {
  console.log("props_id", props.id);
  // const [count, setCount] = useState(1);
  let dispatch = useDispatch();

  const count = useSelector((state) => state.Reducer?.myCartdata.quantity);
  // console.log("quanttttyyyyyy", count);
  // const inc = () => {
  //   count >= 5 ? alert("not more then 5 ") : setCount(count + 1);
  // };

  return (
    <>
      {/* <div>Quantity{count}</div> */}
      <span>
        <button
          style={{ margin: "5px" }}
          className="btn btn-warning"
          onClick={() => dispatch(Increament(props.id))}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={() => dispatch(decreament(props.id))}
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(RemoveCart(props.id))}
        >
          Remove Cart
        </button>
      </span>
    </>
  );
}

export default CartCount;
