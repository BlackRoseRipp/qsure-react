import Lottie from "lottie-react";
import React from 'react';
import searchAnimation from '../Animations/75419-search.json';
import dashboardManAnimation from '../Animations/76498-data-analysis-animation.json';
import exerciseAnimation from '../Animations/78268-workout.json';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className='dashboard-banner'>
                <h1 className='heading text-white fw-bold text-center'>Personal Health Dashboard</h1>
            </div>
            <div className='grey-container'>
                <h2 className='heading body-header text-center fw-bold'>Features</h2>
                <div className="small-card-container mt-5 mx-auto">
                    <div className="row w-100 mx-0 g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/languages-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">Translation of Over 60 Languages</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/behavior-color-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">Behavioral Identification Modules</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/fitness-color-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">Fitness and Vital Tracking</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/multimedia-color-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">250+ Multimedia Videos</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/health-monitor-color-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">Incentive Tracking</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/device-color-icon.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold">Wearable Device Connectivity</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <div className='row mx-0 w-100 g-5'>
                        <div className='col-lg-6 d-flex flex-column justify-content-center order-first'>
                            <img src='assets/img/1217057.png' className='download-png' />
                            <h2 className='heading body-header fw-bold' style={{fontSize: '41px'}}>
                                Complete Your Health Optimization Activities Right On Your Mobile App!
                            </h2>
                            <div className='mt-3'>
                                <a href='#' className='btn btn-download heading'>Download Now</a>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1'>
                            <Lottie animationData={exerciseAnimation} loop={true} autoPlay={true} />
                        </div>
                        <div className='col-lg-6 order-3 order-lg-2'>
                            <Lottie animationData={searchAnimation} loop={true} autoPlay={true} />
                        </div>
                        <div className='col-lg-6 order-2 order-lg-3 d-flex flex-column justify-content-center'>
                            <img src='assets/img/1217057.png' className='download-png' />
                            <h2 className='heading body-header fw-bold' style={{fontSize: '41px'}}>
                                Search "Personal Health Dashboard" To Download The App Now
                            </h2>
                            <div className='mt-3'>
                                <a href='#' className='btn btn-download heading'>Download Now</a>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-center order-4'>
                            <h2 className='heading body-header fw-bold' style={{fontSize: '41px'}}>
                                Other Dashboard Uses
                            </h2>
                            <p>
                                Activate account + watch intro video (meets first month’s requirement)
                                <br></br><br></br>
                                Opt-In to receive important text reminders. Just text “Qsure” to (833) 664-6570
                                <br></br><br></br>
                                Complete monthly health optimization activities on the convenient mobile app or 
                                dashboard online
                                <br></br><br></br>
                                Use “My Benefit Tools” tab on dashboard to learn more about free, available benefits
                            </p>
                            <div className='mt-3'>
                                <a href='#' className='btn btn-download heading'>Download Now</a>
                            </div>
                        </div>
                        <div className='col-lg-6 order-last'>
                            <Lottie animationData={dashboardManAnimation} loop={true} autoPlay={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard