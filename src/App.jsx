import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="bg-dark text-white">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/profile">profile</Breadcrumb.Item>
          <Breadcrumb.Item href="/orders">Orders</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </>
  );
};

export default App;
