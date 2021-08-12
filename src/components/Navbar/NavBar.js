import React, {useContext, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/img/logo blanco ACP.png'
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
                        {
                            !isAuth ? <Nav.Link className={'nav-link'} onClick={() => {setShowNav(true)}}>¿Ya presentaste tu assessment?</Nav.Link> : ''
                        }

                        {/*<Nav.Link href="#/">Tomar assesstment</Nav.Link>*/}
                        {/*<Nav.Link href="#/">Contactanos</Nav.Link>*/}
                    </Nav>
                    <Nav>
                        {
                            isAuth ? <p className={'nav-link'} onClick={logout}>logout</p> : ''
                        }
                        <Link className={'nav-link'} to={'/trainer-home'}>{isAuth ? userData.name.toUpperCase() : '¿Eres Trainer?'}</Link>
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