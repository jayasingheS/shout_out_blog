import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from "react-bootstrap";
import Logo from "../../images/logo.png"
import {Link} from "react-router-dom";
export default function NavbarNew() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="" >
            <Container>
                <Navbar.Brand href="#home"><img
                    src={Logo}
                    style={{ width:"9%", height:"auto"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Articles">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/About" >About</Nav.Link>
                        <Nav.Link as={Link} to="/Contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
