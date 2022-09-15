import { Route, Routes } from "react-router-dom";
import "./App.css";

import CartList from "./component/CartList";
import Home from "./component/Home";
import Login from "./component/Login";
import MyNavbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import Signup from "./component/Signup";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <MyNavbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route exact path="/" element={<ProductCard />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cartlist" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;
