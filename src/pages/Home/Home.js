import React from "react";
import ReactPlayer from 'react-player';
import VideoModal from "../Videos/VideoModal";
import './Home.css';

const Home = () => {

    return (
        <div>
            <div className="home-hero-container">
                <div className="row container mx-auto g-4">
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
                        <div className="text-lg-start text-center">
                            <a className="btn btn-hero montserrat" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img className="hero-img" src='assets/img/df.jpg' alt='Stretching-Quads' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-container container">
                <h2 className="heading body-header fw-semibold text-center" style={{fontSize: '66px'}}>What Is Qsure?</h2>
                <p className="text-center w-75 mx-auto fw-normal" style={{fontSize: '1.5rem'}}>
                    Qsure is a supplementary Benefits Provider that provides employees unlimited access to 
                    tools and resources to promote a healthier lifestyle at no out-of-pocket cost to the employee 
                    or the employer.
                </p>
                <div className="d-flex justify-content-center mt-5">
                    <ReactPlayer url='https://www.youtube.com/watch?v=urE-09RcpNM'/>
                </div>
                {/* <div className="d-flex justify-content-center mt-5">
                    <VideoModal 
                        src='https://www.youtube.com/watch?v=urE-09RcpNM'
                        bg='assets/img/videos/mm.jpg'
                    />
                </div> */}
            </div>
            <div className="grey-container">
                <div className="container">
                    <h2 className="heading body-header fw-bold text-center">Employee Benefits</h2>
                    <p className="text-center w-75 mx-auto fw-normal" style={{fontSize: '1.5rem'}}>
                        At Qsure we provide your employees with additional health benefits with additional health 
                        benefits beyond primary health care plans.
                    </p>
                </div>
                <div className="container-lg">
                    <div className="row w-100 mx-0 g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/2981676.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Initial Health Screening</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Our initial health screening includes a self assessment, biometric, and DNA 
                                        Screening all of which can be tracked online.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/2986566.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Multi-Channel Coaching</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Our multi-channel tracking is not only web based but also has an option to speak 
                                        to coaches over the phone. There is 24/7 access and no copay.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/1897418.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Wellness Coaching</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Our licensed health coaches will diligently assist you in tasks as simple as 
                                        nutrition information as well more complex mental health issues such as stress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/2981669 (1).png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Confidence Support Assitance</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Our health professionals also provide services that aid in supporting you 
                                        confidence in your work and in your self.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/1101652.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Seven Claim Payment Activities</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Activities included in our plan are telemedicine, DNA Screening, Health Risk 
                                        Assessment, Online Health Coaching, Telephonic Health Coaching, Online Wellness 
                                        Coaching and Biometric Screening
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src='assets/img/970267.png' className='icon-png' />
                                    <h5 className="card-title fw-semibold montserrat">Preventative Health Care Benefits</h5>
                                    <p className="card-subtitle mt-2 text-muted fw-normal">
                                        Qsure provides a plethora of benefits including increased take home pay as well 
                                        as 24/7 telemedicine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-container container">
                <h2 className="heading body-header fw-bold text-center mb-4">Employer Benefits</h2>
                <div className="row w-80 mx-auto g-5">
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/1101666.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>Tax Savings</h4>
                                <p className="item-text mb-0">Annual Tax Savings of $600 per employee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/1217057.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>MEC Plan Availability</h4>
                                <p className="item-text mb-0">If Needed, We Can Add MEC Plan for ACA Compliance</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/hospital.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>Hospital Indemnity</h4>
                                <p className="item-text mb-0">Provides your Employees with Hospital Indemnity Plan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/2981676.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>Health Management Platform</h4>
                                <p className="item-text mb-0">Provides Employees with All-Inclusive Preventative Health Management Platform</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/2415577.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>Immediate Savings</h4>
                                <p className="item-text mb-0">Immediate Tax Savings Once Program is Initiated and First Payroll is Run.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <img src='assets/img/2981676.png' className="item-icon" />
                            <div className="px-4">
                                <h4 className="heading body-header fw-bold" style={{fontSize: '21px'}}>Address Workplace Issues</h4>
                                <p className="item-text mb-0">Addresses All Workplace Sexual Harassment & Discrimination Issues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-container">
                <div className="rounded-card mx-auto">
                    <div className="p-4 text-center">
                        <h2 className="heading body-header fw-bold text-white" style={{fontSize: '2.75rem'}}>Personal Health Management</h2>
                        <p className='fw-normal text-white' style={{fontSize: '19px'}}>
                            A personal health dashboard to monitor your health optimization progress on mobile.
                        </p>
                    </div>
                    <div className="row w-100 m-0">
                        <div className='col-lg-6'>
                            <img src='assets/img/features-thhhumb-1.png' className="w-100 px-4" />
                        </div>
                        <div className="col-lg-6 pe-lg-5 pe-0 py-lg-0 py-4 text-center text-lg-start">
                            <h3 className="body-header fw-bold text-white" style={{fontSize: '2.75rem'}}>Managing Your Health Just Got Easier.</h3>
                            <p className='fw-normal text-white pe-4' style={{fontSize: '19px'}}>
                                Employees can manage their tasks and beneﬁts on the employee Personal Health DashboardTM 
                                (PHD), which includes an individual risk proﬁle, a customized monthly action plan, a risk 
                                resolution center, and health reminders. This personal health dashboard to monitor your 
                                health optimization progress by assessment of risk profile, a monthly action plan with 
                                activities backed by health reminders and a resolution center.
                            </p>
                            <div className="w-50 text-center mx-lg-0 mx-auto">
                                <a href='#'>
                                    <img src='assets/img/app-store.png' className='img-link' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home