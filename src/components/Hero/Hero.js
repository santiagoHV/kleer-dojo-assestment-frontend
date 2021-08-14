import React from "react";
import KleerDojo from '../../assets/imgold/kleer_dojo.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className={'hero'}>
            <img
                src={KleerDojo}
                alt={'Hero Kleer Dojo'}
            />
        </div>
    )
}


export default Hero