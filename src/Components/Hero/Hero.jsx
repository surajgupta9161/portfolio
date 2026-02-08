import React, { useRef } from 'react'
import './Hero.css';
import surajResume from "../../assets/surajResumeFeb.pdf"
import suraj from "../../assets/suraj4.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useGSAP } from '@gsap/react';
import gsap from "gsap"


const Hero = () => {

    const heroRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top 80%",
                toggleActions: "play reset play reset",
            },
        });

        tl.from(".suraj-image", {
            x: -1000,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            .from("h1", {
                y: 60,
                opacity: 0,
                duration: 0.6,
            }, "-=0.5")
            .from("p", {
                y: 40,
                opacity: 0,
                duration: 0.5,
            })
            .from(".hero-action", {
                y: 40,
                opacity: 0,
                duration: 0.5,
            }, "-=0.6");

    }, { scope: heroRef });

    return (
        <div id='hero' ref={heroRef} className='hero'>
            <img src={suraj} alt="hero-photo" className='suraj-image' />
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
