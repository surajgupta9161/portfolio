import React from 'react'
import "./About.css";
import suraj from "../../assets/suraj.jpg"
const About = () => {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={suraj} alt="photo" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>My name is Suraj, and I am a Computer Science Engineer with a B.Tech degree. I have a strong interest in coding, problem-solving, and technology development. I enjoy exploring new programming languages, building projects, and improving my technical skills. My goal is to grow as a developer and contribute to creating innovative software solutions.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML/CSS</p> <hr style={{ width: "80%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>MongoDB</p> <hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>Express.JS</p> <hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>React.JS</p> <hr style={{ width: "80%" }} /></div>
                            <div className="about-skill"><p>Node.JS</p> <hr style={{ width: "60%" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="achivements">
                    <div className="achivement">
                        <h1>05+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="achivement">
                        <h1>05+</h1>
                        <p>PROJECTS PENDING</p>
                    </div>
                    <hr />
                    <div className="achivement">
                        <h1>10+</h1>
                        <p>PROJECTS IDEAS!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
