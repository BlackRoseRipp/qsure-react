import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-hero-container">
                <div className="row container mx-auto">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2 className="text-white fw-bold">Welcome to Qsure</h2>
                        <h1 className="heading text-white fw-bold">A Preventative Healthcare Platform</h1>
                        <p className="hero-descriptor fw-bold">
                            Healthier employees make happier employees. A healthier workforce is the key to your 
                            organization’s success. An investment in their well-being is an investment in your 
                            organization. So, what can you do in order to improve the fitness and wellbeing of 
                            your employees?
                        </p>
                        <p className="fw-bold text-white">
                            Qsure is the answer. It’s a three step preventative healthcare management platform 
                            comprising of a Hospitalization plan to support out of pocket medical costs.
                        </p>
                        <div className="text-start">
                            <a className="btn btn-hero" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img className="hero-img" src='assets/img/df.jpg' alt='Stretching Quads Image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-container">
                <h2 className="heading body-header fw-semibold" style={{fontSize: '66px'}}>What Is Qsure?</h2>
            </div>
        </div>
    )
}

export default Home