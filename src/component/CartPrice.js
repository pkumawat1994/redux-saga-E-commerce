import React from "react";
import { useSelector } from "react-redux";

const CartPrice = () => {
  const cartData = useSelector((state) => state.Reducer?.myCartdata);
  return (
    <>
      {cartData.map((e, i) => {
        return (
          <>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{e.tittle}</td>
              <td>{e.price}</td>

              <td>{e.quantity}</td>
              <td>
                <h5 style={{ color: "blue", fontWeight: "100px" }}>
                  {e.quantity * e.price}
                </h5>

                <span>Rs\-</span>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default CartPrice;
