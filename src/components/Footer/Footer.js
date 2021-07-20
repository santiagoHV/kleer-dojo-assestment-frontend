import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="row justify-content-md-center">
                <div className="offset-1 col-10 col-lg-8 offset-lg-4  dojo-text" align="center">
                    <ul className="text-muted">
                        <li id="copyright">Copyright © Kleer</li>

                        <li><a href="https://www.kleer.la/es/privacy"> Declaración de privacidad </a> <span>|</span>
                        </li>
                        <li><a href="https://www.kleer.la/es/terms"> Términos y condiciones</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer