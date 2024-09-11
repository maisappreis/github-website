import React from "react";
import "./Timeline.css";

const Curriculum = props =>
    <section id="timeline">
        <div className="timeline-area">
            <div className="workexperience-area" id="workexperience">
                <h3 className="title">WORK EXPERIENCE</h3>
                <div className="curriculum-grid">
                    <div className="border-right">
                        <h3 className="item-title text-right">Web Developer | 09/2022 - Present</h3>
                        <h4 className="item-text text-right highligth">Morning Star Consulting - Remote - Rio de Janeiro, RJ - Brazil</h4>
                        <div className="item-text text-right">
                            <ul className="list-area">
                                <li>&#9733; Worked on two systems development projects for the Brazilian state company Petrobrás.</li>
                                <li>&#9733; Migrated an entire system from Vue.js 2 to Vue.js 3.</li>
                                <li>&#9733; Replaced the Vuex dependency for Pinia throughout this same project.</li>
                                <li>&#9733; Implemented Typescript in this project with Vue.js 3, and in meetings with the development team, I
                                    defended the use of Typescript and the migration from API Options to API Composition.</li>
                                <li>&#9733; Designed and implemented user-friendly screens in web applications using mainly the Vue.js.</li>
                                <li>&#9733; Experienced in creating front-end components, always focusing on quality, reuse and code maintenance.</li>
                                <li>&#9733; Migrated an entire MongoDB database to a relational database (SQLite in development, and Postgres in production) using Python scripts.</li>
                                <li>&#9733; Developed RESTful APIs using Django and Python to facilitate communication between front-end applications and back-end systems.</li>
                                <li>&#9733; Reviewing source codes, fixing bugs and implementing improvements.</li>
                                <li>&#9733; Diagnose, resolve bugs, test and refactor web application codes.</li>
                                <li>&#9733; Documented API endpoints using tools like Swagger.</li>
                                <li>&#9733; Experienced with code versioning with GIT.</li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                    <div className="border-right"></div>
                    <div className="border-left">
                        <h3 className="item-title text-left">Entrepreneur | 02/2018 - 09/2022</h3>
                        <h4 className="item-text text-left highligth">Axis 3D - 3D Printing Studio - Criciúma, SC - Brazil</h4>
                        <div className="item-text text-left">
                            <ul className="list-area">
                                <li>&#9733; Business administration, generating budgets, negotiating with customers and marketing activities. Also, 3D modeling and 3D printing.</li>
                                <li>&#9733; Starting my first projects with JavaScript, HTML, CSS, Vue.js and React.js. Also learning SQL and Git.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-area" id="education">
                <h3 className="title">EDUCATION</h3>
                <div className="curriculum-grid">
                    <div className="flex-start border-right hide"></div>
                    <div className="flex-start border-left">
                        <h3 className="item-title text-left">Microsoft Certified</h3>
                        <h4 className="item-text text-left highligth">Azure Fundamentals</h4>
                        <p className="item-text text-left">07/2024 - Current</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://learn.microsoft.com/pt-br/users/maisapierinipreis-4177/credentials/1e639117d2ba788e">
                            <button className="bnt color">
                                See certificate
                            </button>
                        </a>
                    </div>
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Microsoft Certified</h3>
                        <h4 className="item-text text-right highligth">Power BI Data Analyst Associate</h4>
                        <p className="item-text text-right">11/2023 - 11/2024</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://learn.microsoft.com/pt-br/users/maisapierinipreis-4177/credentials/23bd0e2e1d86834b">
                            <button className="bnt color">
                                See certificate
                            </button>
                        </a>
                    </div>
                    <div className="flex-start hide"></div>
                    <div className="flex-start border-right hide"></div>
                    <div className="flex-start border-left">
                        <h3 className="item-title text-left">Data Analysis</h3>
                        <h4 className="item-text text-left highligth">Lato Sensu in Data Analysis at Descomplica College</h4>
                        <p className="item-text text-left">06/2022 - 02/2023</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/19kfGpPeIVFdpw2qAjd9lqAhy8G9Bw_pR/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate
                            </button>
                        </a>
                    </div>
                    <div className="flex-end border-right">
                        <h3 className="item-title text-right">Software Analysis and Development</h3>
                        <h4 className="item-text text-right highligth">Lato Sensu in Software Analysis and Development at Descomplica College</h4>
                        <p className="item-text text-right">06/2022 - 01/2023</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/19htM8iJUn5fGy91Iz17kFtspE9Pa2HKT/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate
                            </button>
                        </a>
                    </div>
                    <div className="flex-start hide"></div>
                    <div className="flex-start border-right hide"></div>
                    <div className="flex-start border-left">
                        <h3 className="item-title text-left">Bussiness Administration</h3>
                        <h4 className="item-text text-left highligth">Bachelor's in Bussiness Administration at State University of Santa Catarina</h4>
                        <p className="item-text text-left">08/2013 - 07/2017</p>
                        <a className="link-area" target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1CYtbULqZI5X5_3VvFfbjmKbt29E_-qiM/view?usp=drive_link">
                            <button className="bnt color">
                                See certificate
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

export default Curriculum;