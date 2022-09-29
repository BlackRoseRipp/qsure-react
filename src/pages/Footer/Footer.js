import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container-lg main-footer-container m-4'>
                    <div className='row' id='mainRow'>
                        <div className='col-lg-4 text-start'>
                            <a href="/" style={{ width: '10%'}}>
                                <img src="assets/img/Qsure-Logo-Lite.png" style={{ width: '70%' }} />
                            </a>
                            <div className='mx-auto mt-3'>
                                <p className="footer-description">
                                    Qsure is a supplementary Benefits Provider that provides employees unlimited 
                                    access to tools and resources to promote a healthier lifestyle at no out-of-pocket 
                                    cost to the employee or the employer.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ms-5 mt-4'>
                                <h5 className='footer-header heading'>
                                    Useful Links
                                </h5>
                                <div className='d-flex flex-column'>
                                    <a className='contact-link' href='/plans'>Plans</a>
                                    <a className='contact-link' href='/personal-health-dashboard'>Dashboard</a>
                                    <a className='contact-link' href='/videos'>Videos</a>
                                    <a className='contact-link' href='/contact-us'>Contact Us</a>
                                    <a className='contact-link' href='https://qsure.ushealthcenter.com/Activate'>Login</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 footer-contact'>
                            <div className='ms-5 mt-4'>
                                <h5 className='footer-header heading'>
                                    Contact Us
                                </h5>
                                <div className='d-flex flex-column'>
                                    <a className="contact-link" href="tel:888-778-7350">
                                        (888) 778-7350
                                    </a>
                                    <a className="contact-link" href="mailto:info@qsure.com">
                                        info@qsure.com
                                    </a>
                                    <a className="contact-link" href="https://www.google.com/maps/place/143+W+72nd+St,+New+York,+NY+10023/@40.7782211,-73.9824139,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2588a351f00ed:0xa7f97add245c9e79!8m2!3d40.7782211!4d-73.9802252!16s%2Fg%2F11bw3_tfp3?hl=en">
                                        276 5th Avenue Suite 704-3162<br></br>New York, New York 10001
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer