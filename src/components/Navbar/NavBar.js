import React, {useContext, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/imgold/logo blanco ACP.png'
import LogoRed from '../../assets/img/KDJ logo magenta.png'
import './NavBar.css'
import {Link} from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import ModalSearchAssessment from "../../pages/ModalSearchAssessment/ModalSearchAssessment";
import {useHistory} from 'react-router-dom'

const NavBar = (props) => {
    const {isAuth, userData, logout, token} = useContext(UserContext)
    const history = useHistory()
    const [showNav, setShowNav] = useState(false)
    const [email, setEmail] = useState('')

    // console.log('auth ' + isAuth)
    // console.log('token ' + token)


    const handleCloseNav = () => setShowNav(false)
    const handleSubmit = () => {
        history.push(`/results-assessment/${email}`)
        setShowNav(false)
    }
    const handleChangeModal = (e) => {
        setEmail(e.target.value)
    }


    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant={props.whiteTheme ? "light" :"dark"}
            className={props.whiteTheme ? 'navbar-white' : 'navbar'}
        >
            <Container className={`navbar__container ${props.whiteTheme ? 'navbar-container-white' : ''}`}>
                <Navbar.Brand >
                    <Link to={'/'}
                          className={props.whiteTheme ? 'navbar--text' : ''}
                    >
                        <img src={props.whiteTheme ? LogoRed : Logo} alt={'Logo Kleer Dojo'} height={70}/>
                        <p className={'brand-text'}>Home</p>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


                        {/*<Nav.Link href="#/">Tomar assesstment</Nav.Link>*/}
                        {/*<Nav.Link href="#/">Contactanos</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        {
                            !isAuth ? <Nav.Link className={`nav-link ${props.whiteTheme ? 'navbar--text' : ''}`} onClick={() => {setShowNav(true)}}>¿Ya presentaste tu assessment?</Nav.Link> : ''
                        }
                        <Link className={`nav-link ${props.whiteTheme ? 'navbar--text' : ''}`} to={'/trainer-home'}>{isAuth ? userData.name : '¿Eres Trainer?'}</Link>
                        {
                            isAuth ? <p className={`nav-link ${props.whiteTheme ? 'navbar--text' : ''}`} onClick={logout}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                     className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                    <path fill-rule="evenodd"
                                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                            </p> : ''
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ModalSearchAssessment
                show={showNav}
                onClose={handleCloseNav}
                onSubmit={handleSubmit}
                onChange={handleChangeModal}
                email={email}
            />
        </Navbar>
    )
}

export default NavBar