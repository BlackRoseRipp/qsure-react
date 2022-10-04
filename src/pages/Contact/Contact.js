import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-banner'>
                <h1 className='heading text-white fw-bold text-center'>Contact Us</h1>
            </div>
            <div className='white-container'>
                <div className='container'>
                    <div className='contact-form'>
                        <div className='row w-100 mx-0'>
                            <div className='col-5 info-column'>
                                <div className='d-flex align-items-start my-4'>
                                    <FaPhoneAlt className='contact-icon'/>
                                    <p className='text-white fw-light ms-3' style={{fontSize: '21px'}}>
                                        <a href='tel:(888)778-7350' className='contact-link heading'>CALL US</a>
                                        <br></br>
                                        (888) 778-7350
                                    </p>
                                </div>
                                <div className='d-flex align-items-start my-4'>
                                    <IoMdMail className='contact-icon'/>
                                    <p className='text-white fw-light ms-3' style={{fontSize: '21px'}}>
                                        <a href='mailto:info@qsure.com' className='contact-link heading'>EMAIL</a>
                                        <br></br>
                                        info@qsure.com
                                    </p>
                                </div>
                                <div className='d-flex align-items-start my-4'>
                                    <FaPhoneAlt className='contact-icon'/>
                                    <p className='text-white fw-light ms-3' style={{fontSize: '21px'}}>
                                        <span className='heading'>ADDRESS</span>
                                        <br></br>
                                        276 5th Avenue Suite 704-3162
                                        <br></br>
                                        New York, New York 10001
                                    </p>
                                </div>
                            </div>
                            <div className='col-7 form-container'>
                                <h2 className='heading text-center' style={{fontSize: '59px', fontWeight: '500'}}>Contact Us</h2>
                                <input 
                                    type='name'
                                    className='form-control'
                                    id='contactNameInput'
                                    placeholder='Name'
                                    required
                                ></input>
                                <input 
                                    type='email'
                                    className='form-control'
                                    id='contactEmailInput'
                                    placeholder='Email'
                                    required
                                ></input>
                                <input 
                                    type='text'
                                    className='form-control'
                                    id='contactPhoneInput'
                                    placeholder='Phone Number'
                                    required
                                ></input>
                                <textarea
                                    className='form-control'
                                    id='contactNameInput'
                                    placeholder='Message'
                                    rows='6'
                                    required
                                ></textarea>
                                <button type='submit' className='btn btn-contact-submit heading'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact