import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../redux/Action";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginUser(data));
    reset();
    navigate("/");
  };
  const mystyle = { textAlign: "center" };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={mystyle}>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2"
            type="text"
            {...register(
              "email",
              { required: true },
              { pattern: /^[A-Za-z]+$/i }
            )}
            placeholder="ENTER EMAIL"
          />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <input
            className="m-2"
            type="password"
            {...register("password", { required: true })}
            placeholder="ENTER PASSWORD"
          />
          {errors.pasword && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <button className="btn btn-success" type="submit">
            LOGIN
          </button>{" "}
          &nbsp;&nbsp;or&nbsp;&nbsp;
          <Link to="/signup">
            {" "}
            <button className="btn btn-warning">SIGNUP</button>
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
