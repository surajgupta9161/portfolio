import React, { useState } from "react";
import "./Card.css";
import Data from "../../Data/Data.js";

function ProjectCard({ project }) {
    const [light, setLight] = useState({ x: "50%", y: "50%", opacity: 0 });
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.nativeEvent.offsetX; // card ke andar ka X
        const y = e.nativeEvent.offsetY; // card ke andar ka Y

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 3;
        const rotateY = ((x - centerX) / centerX) * -3;

        setTilt({ x: rotateX, y: rotateY });
        setLight({ x: x + "px", y: y + "px", opacity: 0.6 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setLight({ ...light, opacity: 0 });
    };

    return (
        <div
            className="scene card-box"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="card"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    "--light-x": light.x,
                    "--light-y": light.y,
                    "--light-opacity": light.opacity,
                }}
            >
                <div className="card-inner">
                    <h3 className="title">{project.title}</h3>
                    <p className="desc">{project.description}</p>

                    <div className="meta">
                        {project.technologies.map((tech, i) => (
                            <div key={i} className="chip">
                                {tech}
                            </div>
                        ))}
                        <div
                            style={{
                                marginLeft: "auto",
                                fontSize: "15px",
                                color: "#777",
                            }}
                        >
                            <a href={project.link} target="_blank" className="getcode">GetCode</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Card() {
    return (
        <div className="cards-container">
            {Data.map((project, ind) => (
                <ProjectCard key={ind} project={project} />
            ))}
        </div>
    );
}
