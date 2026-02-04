import React, { useRef } from 'react'
import "./About.css";
import suraj from "../../assets/suraj.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {


    gsap.registerPlugin(ScrollTrigger);

    const aboutRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                toggleActions: "play reset play reset",

            },
        });

        tl.from(".about-title h1", { y: 60, opacity: 0, duration: 0.4 })
            .from(".about-left img", { x: -80, opacity: 0, duration: 0.4 })
            .from(".about-para p", { y: 40, opacity: 0, duration: 0.5 })
            .from(".about-skills", { x: 50, opacity: 0, stagger: 0.6 })
            .from(".achivements", { y: 50, opacity: 0, stagger: 0.6 });

        ScrollTrigger.refresh();
    }, { scope: "#about" });


    // useGSAP(() => {
    //     const tl = gsap.timeline({ paused: true });

    //     tl.from(".about-title h1", {
    //         y: 60,
    //         opacity: 0,
    //         duration: 0.6,
    //         ease: "power3.out",
    //     })
    //         .from(".about-left img", {
    //             x: -80,
    //             opacity: 0,
    //             duration: 0.6,
    //         })
    //         .from(".about-para p", {
    //             y: 40,
    //             opacity: 0,
    //             duration: 0.5,
    //         })
    //         .from(".about-skills", {
    //             x: 50,
    //             opacity: 0,
    //             stagger: 0.2,
    //         })
    //         .from(".achivements", {
    //             y: 50,
    //             opacity: 0,
    //             stagger: 0.3,
    //         });

    //     ScrollTrigger.create({
    //         trigger: ".about-title",
    //         start: "top 85%",
    //         onEnter: () => tl.play(),
    //         onLeaveBack: () => tl.reverse(),
    //         // markers: true, // debug ke baad hata dena
    //     });

    // }, { scope: "#about" });


    return (
        <div>
            <div id='about' ref={aboutRef} className="about">
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
                        <h1>02+</h1>
                        <p>PROJECTS PENDING</p>
                    </div>
                    <hr />
                    <div className="achivement">
                        <h1>03+</h1>
                        <p>PROJECTS IDEAS!</p>
                    </div>
                </div>
            </div>
            <div id='projects' className='projects'>
                <h1>Projects</h1>
            </div>
        </div>
    )
}

export default About
