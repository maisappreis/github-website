import React from "react";
import "../../main/App.css";
import "./Portfolio.css";
import Gym from "../../assets/gym.png";
import Django from "../../assets/django.png";
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
                            <div className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">An ERP System for a Gym Company</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>
                                            <a href="https://maisappreis.github.io/upfit-gym/" target="_blank"
                                                rel="noopener noreferrer" >
                                                Test the project
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/maisappreis/upfit-project" target="_blank"
                                                rel="noopener noreferrer" >
                                                See the code
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="proj-container"
                        >
                            <img className="proj-img" src={DentalClinic} alt="Lamp" />
                            <div className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">An ERP System for a Dental Clinic</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>
                                            <a href="https://maisappreis.github.io/dental-clinic/" target="_blank"
                                                rel="noopener noreferrer" >
                                                Test the project
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/maisappreis/dental-clinic" target="_blank"
                                                rel="noopener noreferrer" >
                                                See the code
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="proj-container"
                        >
                            <img className="proj-img" src={Django} alt="Lamp" />
                            <div className="hover-box">
                                <div className="hover-text">
                                    <p className="hover-title">Django APIs for both Web Applications</p>
                                    <hr className="hr-line" />
                                    <ul className="hover-list">
                                        <li>
                                            <a href="https://github.com/maisappreis/django-APIs" target="_blank"
                                                rel="noopener noreferrer" >
                                                See the code
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;