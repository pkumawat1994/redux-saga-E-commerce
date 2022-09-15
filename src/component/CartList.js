import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./../App.css";
import { toast } from "react-toastify";
import CartCount from "./CartCount";
import Multiple_price from "./Multiple_price";
import { Reorder } from "framer-motion";
import { useEffect } from "react";

function CartList() {
  const [dat, setDat] = useState();
  const cartData = useSelector((state) => state.Reducer?.myCartdata);

  return (
    <>
      {cartData
        ? cartData.map((elemnt, i) => {
            console.log(555555, i);
            return (
              <>
                <div className="cartWrapper">
                  <div className="cart">
                    <div className="imgWrapper">
                      <img src={elemnt.img} alt="itemImage" />
                    </div>
                    <h5>{elemnt.tittle}</h5>
                    <h4>{elemnt.quantity}</h4>
                    {/* INCREAMENT DECREMENT AND REMOVE CART */}
                    <CartCount id={elemnt.id} />
                  </div>
                </div>
              </>
            );
          })
        : toast.error("Your Cart is Empty!")}
      <Multiple_price />
    </>
  );
}

export default CartList;
