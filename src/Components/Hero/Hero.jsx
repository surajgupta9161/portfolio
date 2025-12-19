import React from 'react'
import './Hero.css';
import surajResume from "../../assets/SurajResumeDec.pdf"
import suraj from "../../assets/suraj4.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={suraj} alt="hero-photo" />
            <h1>Hi I'm <span>Suraj Gupta,</span> MERN Full Stack Developer from India.</h1>
            <p>Turning ideas into code that impacts the world. Every bug fixed is a step closer to innovation. </p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='ancher' href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume"><a href={surajResume} download=""> Download Resume</a></div>
            </div>
        </div>
    )
}

export default Hero
