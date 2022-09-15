import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddCartItem, CartAction } from "../redux/Action";
import { AnimatePresence, motion } from "framer-motion";

function ProductCard() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const session_localstorage = JSON.parse(localStorage.getItem("user"));
  console.log("LOGIN_USER_DETAIL_SESSION", session_localstorage);

  const cartdata = useSelector((state) => state?.Reducer?.data);
  console.log("FETCH_CART_DATA", cartdata);

  useEffect(() => {
    dispatch(CartAction());
  }, []);
  const navCallFun = () => {
    navigate("/login");
    toast.error("First You Login Then Start Shoping");
  };
  return (
    <>
      <div className="cartWrapper">
        {cartdata?.map((ele, i) => {
          return (
            <>
              <div keys={ele.id} className="cart">
                <div className="imgWrapper">
                  <img src={ele.img} alt="itemImage" />
                </div>
                <div className="contentWrapper">
                  <h4>{ele.tittle}</h4>
                  <span>
                    <h5>price</h5>
                  </span>{" "}
                  <p className="itemDesc">{ele.price} Rs</p>
                  <button
                    onClick={() =>
                      session_localstorage !== null
                        ? dispatch(AddCartItem(ele))
                        : navCallFun()
                    }
                    className="btn btn-success cartBtn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
