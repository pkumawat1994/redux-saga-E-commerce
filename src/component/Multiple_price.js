import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCart } from "../redux/Action";
import "./../App.css";
import { toast } from "react-toastify";
import CartPrice from "./CartPrice";
import CartCount from "./CartCount";

function Multiple_price() {
  const cartData = useSelector((state) => state.Reducer?.myCartdata);

  //TOTEL PRICE COUNT STATE
  const [allTotel, setAllTotel] = useState();
  useEffect(() => {
    console.log("jdhfjdfdf");
    const ProductTotelPrice = cartData.reduce(
      (sum, i) => (sum += i.quantity * i.price),
      0
    );
    setAllTotel(ProductTotelPrice);
  }, [cartData]);

  return (
    <>
      {cartData.length !== 0 ? (
        <table class="table table-dark continDiv">
          <thead>
            <tr>
              <th scope="col">no</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">PRODUCT PRICE</th>
              <th scope="col">PRODUCT COUNT</th>
              <th scope="col">TOTEL</th>
            </tr>
          </thead>
          <tbody>
            <CartPrice />
          </tbody>{" "}
          <tr style={{ marginLeft: "20px" }}>
            <td>
              <button
                style={{ borderRadius: "20px" }}
                className="btn btn-success"
                onClick={() => alert("Add payment system ")}
              >
                {" "}
                Proccess To Payment
              </button>{" "}
            </td>
            <td>
              {" "}
              <button
                style={{ borderRadius: "17px" }}
                className="btn btn-primary"
              >
                <h5>
                  {" "}
                  totel-:
                  {allTotel}{" "}
                </h5>
              </button>{" "}
            </td>
          </tr>
        </table>
      ) : (
        <h1>your Cart is Empty</h1>
      )}
    </>
  );
}

export default Multiple_price;
