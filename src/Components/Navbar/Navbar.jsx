import React, { useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Navbar = () => {

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    // gsap.registerPlugin(ScrollTrigger);

    // useGSAP(() => {
    //     gsap.from(".navbar", {
    //         y: -120,
    //         // top: 100,
    //         opacity: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: ".navbar",
    //             start: "top 80%",   // 👈 jab navbar viewport me aaye
    //             toggleActions: "play none none none",
    //         },
    //     })
    // })

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <i className="fa-solid fa-bars nav-mob-open" onClick={openMenu} ></i>
            <ul ref={menuRef} className="nav-menu">
                <i className="fa-solid fa-xmark nav-mob-close" onClick={closeMenu}></i>
                <li> <AnchorLink className='anchor' href='#hero'><p>Home</p></AnchorLink></li>
                <li> <AnchorLink className='anchor' href='#about'><p>About me</p></AnchorLink> </li>
                <li> <AnchorLink className='anchor' href='#projects'><p>Projects</p></AnchorLink> </li>
                <li>
                    <a
                        className='anchor'
                        href='https://wanderlust-8kue.onrender.com/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>Latest Project</p>
                    </a>
                </li>
                <li> <AnchorLink className='anchor' href='#contact'><p>Contact</p></AnchorLink> </li>
            </ul>
            <div className="nav-connect"> <AnchorLink className='anchor-btn' href='#contact'>Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar
