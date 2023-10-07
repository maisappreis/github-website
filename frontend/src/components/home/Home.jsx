import React from "react";
import "./Home.css";
import "../../main/App.css";
import ImgHome from "./ImgHome";
import backButton from "../../assets/back-btn.png";

const Home = props =>
    <div className="header-area" id="home">
        <section className="header-intro">
            <ImgHome className="img" />
            <div className="header-content">
                <h1 className="title">Maisa</h1>
                <h4 className="subtitle-1">FULL-STACK DEVELOPER</h4>
                <h4 className="subtitle-2">PORTIFÓLIO</h4>
            </div>
        </section>
        <div className="welcome">
            Bem-vindo ao meu primeiro site...
        </div>
        <button className="back-btn">
        <a href="#home">
            <img src={backButton} alt="Back button" />
        </a>
        </button>
    </div>

export default Home;