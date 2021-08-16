import React from "react";
import image from '../../assets/img/error .png'
import './PageError.css'

const PageError =  (props) => {
    return (
        <section id={'error-page'}>
            <img src={image} alt={'imagen de error'}/>
            <h2>{props.error || '404 página no encontrada'}</h2>
        </section>
    )
}

export default PageError