import logo from "./assets/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="e-commerce"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{''}
                         e-commerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/category/smartphones">Celulares</Nav.Link>
                        <Nav.Link as={Link} to="/category/notebooks">Notebooksk</Nav.Link>
                        <Nav.Link href="#link">Tablets</Nav.Link>
                        <Nav.Link href="#link">Consolas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
      </Navbar>
      
    )

}

export default NavBar