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
                    About 2 years ago, I discovered the software development area and I was enchanted.
                    Even though I had a degree in Business Administration, I made the decision to become a developer.
                    For 5 months I dedicated myself full time to studying and training, for 12 to 15 hours a day, before
                    getting my first job in this area. Since then, I have been working in this same company, learning more
                    and more, and falling in love, mainly, with front-end development.
                </p>
                <h4 className="highlight-text">
                    I am very dedicated to everything I do, I learn quickly and I am always willing to take on new challenges!
                </h4>
            </div>
            <img className="img-item" src={codeLamp} alt="Code Lamp" />
            <div className="about-item-right"></div>
        </div>
    </div>


export default About;