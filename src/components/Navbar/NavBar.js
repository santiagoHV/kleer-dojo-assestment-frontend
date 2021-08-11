import React, {useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/logo blanco ACP.png'
import './NavBar.css'
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";

const NavBar = () => {

    const {isAuth, userData, logout, token} = useContext(UserContext)
    console.log('isAuth ' + isAuth)
    console.log('token :' + token)

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={'navbar'}
        >
            <Container className={'navbar__container'}>
                <Navbar.Brand >
                    <Link to={'/'}>
                        <img src={Logo} alt={'Logo Kleer Dojo'} height={50}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#/">Tomar assesstment</Nav.Link>*/}
                        {/*<Nav.Link href="#/">Contactanos</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        <p className={'nav-link'} onClick={logout}>logout</p>
                        <Link className={'nav-link'} to={'/trainer-home'}>{isAuth ? userData.name.toUpperCase() : '¿Eres Trainer?'}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar