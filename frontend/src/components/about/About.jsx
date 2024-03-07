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
                    Innovative and task-driven professional with 3 years of experience in web
                    development. I have solid knowledge of Vue.js and React.js framework. I started
                    my career in the administration area, working with finance, then I decided to
                    start a business with 3D printing,
                    and finally, I discovered and fell in love with software development.
                </p>
                <h4 className="highlight-text">
                    I learn quickly and I am willing to learn any new tool that is not already part of my knowledge!
                </h4>
            </div>
            <img className="img-item" src={codeLamp} alt="Code Lamp" />
            <div className="about-item-right"></div>
        </div>
    </div>


export default About;