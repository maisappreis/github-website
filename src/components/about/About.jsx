import React from "react";
import "../../main/App.css";
import "./About.css";
import codeLamp from "../../assets/code-lamp.png";


const About = props =>
    <div className="about-area" id="about">
        <div className="about-flex row">
            <div className="about about-item">
                <h3 className="about-subtitle">ABOUT ME</h3>
                <hr className="line"/>
                <p className="about-text">
                    Software Engineer passionate about modeling and solving problems by coding, constantly adapting
                    to new environments, learning new technologies, and contributing to collaborative environments.
                    I am committed to business objectives and have a strong ability to work as part of a team, both
                    in Backend and Frontend development. I firmly believe in the importance of collaboration and
                    mutual support between colleagues to achieve quality results and drive company success.
                </p>
                <h4 className="highlight-text">
                    New challenges and technologies are always more than welcome. <br />
                    Keep coding!!
                </h4>
            </div>
            <img className="img-item" src={codeLamp} alt="Code Lamp" />
            <div className="about-item-right"></div>
        </div>
    </div>


export default About;