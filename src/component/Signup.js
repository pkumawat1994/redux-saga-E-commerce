import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterPost } from "../redux/Action";

function Signup() {
  const dispatch = useDispatch();
  const successData = useSelector((state) => state.Reducer.dt);
  console.log(555, successData);
  // const error = useSelector((state) => console.log("ressssss", state));
  // console.log(error);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(RegisterPost(data));
    reset();
  };

  useEffect(() => {
    if (successData.length > 0) {
      toast.success("success Register");
      navigate("/");
    }
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2"
            {...register(
              "name",
              { required: "Name is required" },
              { pattern: /^[A-Za-z]+$/i },
              { max: 10 }
            )}
            placeholder="ENTER NAME"
          />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <input
            className="m-2"
            {...register(
              "email",
              { required: "Email is required" },
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
            {...register(
              "mobile",
              { required: "Email is required" },
              { pattern: /^[A-Za-z]+$/i }
            )}
            placeholder="ENTER MOBILE NUMBER"
          />
          {errors.mobile && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <input
            className="m-2"
            {...register("password", { required: true })}
            placeholder="ENTER PASSWORD"
          />
          {errors.password && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <br />
          <button className="btn btn-success">SIGNUP</button>&nbsp;or&nbsp;
          <span>
            <Link to="/login">
              {" "}
              <button className="btn btn-danger">LOGIN</button>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Signup;
