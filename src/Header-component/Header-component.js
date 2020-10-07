import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import './header-styles.scss';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SearchBar from "../Search-bar-component/search-bar-component";

 const Header = () => {
    return (
      <div className="header">
        <Navbar variant="dark">
        <img className="logo" src="image/logo.png" alt="logo" />
          <Navbar.Brand href="#home">VIDOE</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
           <SearchBar/>
          </Form>
          <Button className="button-log-in" variant="outline-info">
            Log In
          </Button>
          <div className="vertical-hr" />
          <Button className="button-Register" variant="outline-info">
            Register
          </Button>
        </Navbar>
      </div>
    );
};

export default Header;
