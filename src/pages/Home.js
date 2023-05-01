import React from "react";
import "./css/home.css";
import Resume from "./Resume.pdf";

export const Home = () => {
    return(
        <div className="main">
            <div className="details">
                <p className="greeting">Hello, I am Akash👋</p>

                <p>I am a student at GITAM Deemed to be University, India. An aspiring Computer Science Engineer currently Working towards Web and mobile Application Development.</p>
            </div>
            <div className="links">
                <p className = "link-heading">Connect</p>
                <p><a href="mailto:akashkodali6@gmail.com" className="link">Email: akashkodali6@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5240/" className="link" target="_blank" rel="noreferrer">Linkedin</a></p>
                <p><a href="https://github.com/akodali9" className="link" target="_blank" rel="noreferrer">Github</a></p>
                <br/>
                <p><a href={Resume} className="dbutton link" target="_blank" rel="noreferrer">Resume</a></p>
                <br></br>
            </div>
        </div>
    );
}