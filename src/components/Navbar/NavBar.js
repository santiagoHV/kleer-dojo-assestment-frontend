import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/logo blanco ACP.png'
import './NavBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={'navbar'}
        >
            <Container className={'navbar__container'}>
                <Navbar.Brand href="/">
                    <img src={Logo} alt={'Logo Kleer Dojo'} height={50}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#/">Tomar assesstment</Nav.Link>*/}
                        {/*<Nav.Link href="#/">Contactanos</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <Link className={'nav-link'} to={'/trainer-home'}>¿Eres trainer?</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar