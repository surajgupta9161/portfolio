import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-box">
                <div className="footer-about">
                    <h2>Profile</h2>
                    <p>I am a Software engineer specializing in web development and MERN stack.</p>
                </div>
                <div className="footer-career-links">
                    <h2>Career Plateforms</h2>
                    <a href="https://www.linkedin.com/in/suraj-gupta9161" target='_blank' style={{ display: "block" }}><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                    {/* <a href="#" style={{ display: "block" }}>Naukri</a> */}
                    <a href="https://github.com/surajgupta9161" target='_blank' style={{ display: "block" }}><i className="fa-brands fa-github"></i>Git/Github</a>
                </div>
                <div className="footer-social-links">
                    <h2>Social Media Links</h2>
                    <a href="https://www.instagram.com/5urajgupta/" target='_blank' style={{ display: "block" }}><i className="fa-brands fa-instagram"></i>Instagram</a>
                    <a href="https://youtube.com/@cracking_tech?si=aLe98-WlFhlxMJJF" target='_blank' style={{ display: "block" }}><i className="fa-brands fa-youtube"></i>YouTube</a>
                </div>
            </div>
            <hr className='line' />
            <p><i className="fa-solid fa-copyright"></i>Suraj Gupta. All rights reserved.</p>
            <br />
        </div>
    )
}

export default Footer
