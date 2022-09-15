import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MyNavbar() {
  let navigate = useNavigate();
  const [reflectNav, setreflectNav] = useState(true);
  const storage_data = JSON.parse(localStorage.getItem("user")); //GET LOCAL_STORAGE
  console.log("LOGIN_USER_DETAIL_SESSION", storage_data);
  let cartlength = useSelector((state) => state.Reducer.myCartdata); //GET REDUCERDATA

  //LOGOUT FUNCTION
  const myLogout_func = () => {
    localStorage.removeItem("user");
    navigate("/");
    cartlength.length = 0;
  };
  //REFELECT NAVBAR
  useEffect(() => {
    if (reflectNav) {
      setreflectNav(false);
    } else {
      setreflectNav(true);
    }
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        style={{ backgroundColor: "#A3CB38" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">E-Shopi</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              {" "}
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
            </Link>
            <Nav.Link as={Link} to="/signup">
              SIGNUP
            </Nav.Link>

            {storage_data !== null ? (
              <Nav.Link onClick={myLogout_func}>LOGOUT</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Container>
        <Link to="/cartList">
          <span class="badge badge-success">{cartlength.length}</span>
          <TiShoppingCart style={{ color: "white", fontSize: "40px" }} />
        </Link>
      </Navbar>
    </>
  );
}

export default MyNavbar;
