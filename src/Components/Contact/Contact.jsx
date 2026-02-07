import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Contact.css"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [submiting, setSubmiting] = useState(false)

    const validateEmail = (value) => {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return regex.test(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmiting(true)
        setResult("Sending....");
        const formData = new FormData(event.target);
        if (!validateEmail(formData.get("email"))) {
            alert("Invalid email address");
            setSubmiting(false)
            return;
        }

        formData.append("access_key", "fb42eb7f-7058-4ef7-9c6a-8b03b5699a7c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            alert("Done! We got your details. We'll reach out soon!");
            setSubmiting(false)
        } else {
            console.log("Error", data);
            setResult(data.message);
            alert("Something went wrong, please try again.");
            setSubmiting(false)
        }
    };



    gsap.registerPlugin(ScrollTrigger);

    const contactRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "play reset play reset",
                },
            });

            tl.from(".contact-title h1", {
                y: 50,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    ".contact-left",
                    {
                        x: -100,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.3"
                )
                .from(
                    ".contact-form",
                    {
                        x: 100,
                        opacity: 0,
                        duration: 1,
                    },
                    "-=0.5"
                );
        },
        { scope: contactRef }
    );

    return (
        <div id='contact' ref={contactRef} className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talks</h1>
                    <p>Have an idea or project in mind? Let's connect and turn into reality. Let's build something amazing together. Drop me a message!</p>
                    <div className="contact-detail">
                        <i className="fa-solid fa-envelope"></i>
                        <p>suraj666189@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa-solid fa-phone"></i>
                        <p>+919161666189</p>
                    </div>
                    <div className="contact-detail">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Noida Uttar Pradesh India</p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-form'>
                    <label htmlFor="YourName" >Your Name:</label>
                    <input type="text" name='name' id='YourName' minlength="3" pattern="[A-Za-z\s]+" placeholder='Enter Your Name' title="Number not allowed. Only text allowed (min 3 characters)" required />
                    <label htmlFor="email">Your E-mail:</label>
                    <input type="text" name='email' id='email' placeholder='Enter Your E-mail' required onChange={(e) => {
                        const value = e.target.value;
                        if (!validateEmail(value)) {
                            setEmailError("Invalid email format");
                        } else {
                            setEmailError("");
                        }
                    }} />
                    {emailError && <p style={{ color: "red", fontSize: "15px" }}>{emailError}</p>}
                    <label htmlFor="message">Write your message here:</label>
                    <textarea rows={3} name='message' id='message' minlength="4" placeholder='write here' title="Minimum 4 characters required" required></textarea>
                    <button type='submit' disabled={submiting} >{`${submiting ? "Submiting..." : "Submit"}`}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
