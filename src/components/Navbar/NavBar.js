import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={'navbar'}
        >
            <Container>
                <Navbar.Brand href="/home">Kleer dojo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Tomar assesstment</Nav.Link>
                        <Nav.Link href="#/">Contactanos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Eres trainer?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar