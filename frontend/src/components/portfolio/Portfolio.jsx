import React from "react";
import "../../main/App.css";
import "./Portfolio.css";
import Gym from "../../assets/gym.png";
import Website from "../../assets/website.png";
import DentalClinic from "../../assets/dental-clinic.png";

const Portfolio = (props) => {
    return (
        <section id="portfolio" className="portfolio-area">
            <div className="projects-area">
                <div className="projects-overlay">
                    <h3 className="projects-subtitle">PORTFOLIO</h3>
                    <div className="projects-flex">
                        <div className="proj-container"
                        >
                            <img className="proj-img" src={Gym} alt="Gym System" />
                            <a href="https://github.com/maisappreis/upfit-project" target="_blank"
                                rel="noopener noreferrer" className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">An ERP System for a Gym Company</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>Vue.js</li>
                                        <li>Electron</li>
                                        <li>Django</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div className="proj-container"
                        >
                            <img className="proj-img" src={DentalClinic} alt="Lamp" />
                            <a href="https://github.com/maisappreis/dental-clinic-web-system" target="_blank"
                                rel="noopener noreferrer" className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">An ERP System for a Dental Clinic</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>Next.js</li>
                                        <li>React.js</li>
                                        <li>TypeScript</li>
                                        <li>Django</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div className="proj-container"
                        >
                            <img className="proj-img" src={Website} alt="Lamp" />
                            <a href="https://github.com/maisappreis/github-website" target="_blank"
                                rel="noopener noreferrer" className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">My GitHub page</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>React.js</li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;