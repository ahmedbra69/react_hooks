import { margin } from "@mui/system";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Filter() {
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <span style={{ color: "white", marginRight: "15px" }}>search</span>
          <input type="text" />
        </Container>
      </Navbar>
    </div>
  );
}

export default Filter;
