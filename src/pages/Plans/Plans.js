import React from 'react'
import { FaRegGem } from 'react-icons/fa'
import './Plans.css'

const Plans = () => {
    return (
        <>
            <div className='plans-banner'>
                <h1 className='heading text-white fw-bold text-center'>Plans</h1>
            </div>
            <div className='white-container'>
                <h2 className='heading fw-bold body-header text-center plans-header pb-5'>Limited Benefit Health Plan Options</h2>
                <div className='hstack gap-4 plans-container mx-auto mt-5'>
                    <div className='plan-card-blue flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <FaRegGem className='card-gem'/>
                            <h2 className='heading fw-bold mb-0' style={{fontSize: '28px'}}>PLAN 1</h2>
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='text-center text-white fw-semibold' style={{fontSize: '20px'}}>Monthly Pre-tax Premium</h2>
                            <h4 className='rate montserrat'>
                                <span className='sup'>$</span>
                                <span>900</span>
                            </h4>
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Initial Hospital Admission Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Initial Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>N/A</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>N/A</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Daily In-Hospital Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>30 DAYS</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Emergency Room Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Ambulance Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Wellness Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Month</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$750</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>12months</p>
                            </div>                            
                        </div>
                    </div>
                    <div className='plan-card-green flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <FaRegGem className='card-gem'/>
                            <h2 className='heading fw-bold mb-0' style={{fontSize: '28px'}}>PLAN 2</h2>
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='text-center text-white fw-semibold' style={{fontSize: '20px'}}>Monthly Pre-tax Premium</h2>
                            <h4 className='rate montserrat'>
                                <span className='sup'>$</span>
                                <span>1,200</span>
                            </h4>
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Initial Hospital Admission Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Initial Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$500</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Daily In-Hospital Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>30 DAYS</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Emergency Room Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Ambulance Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Wellness Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Month</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$1000</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>12months</p>
                            </div>                            
                        </div>
                    </div>
                    <div className='plan-card-blue flex-fill'>
                        <div className='card-header d-flex flex-column align-items-center justify-content-center'>
                            <FaRegGem className='card-gem'/>
                            <h2 className='heading fw-bold mb-0' style={{fontSize: '28px'}}>PLAN 3</h2>
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='text-center text-white fw-semibold' style={{fontSize: '20px'}}>Monthly Pre-tax Premium</h2>
                            <h4 className='rate montserrat'>
                                <span className='sup'>$</span>
                                <span>600</span>
                            </h4>
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Initial Hospital Admission Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Initial Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>N/A</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>N/A</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Daily In-Hospital Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day of Confinement</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>10 DAYS</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Emergency Room Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div>                            
                        </div>
                        <div className='card-row-dark'>
                            <h2 className='montserrat card-plan-header'>Ambulance Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Day</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$100</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>1 DAY</p>
                            </div> 
                        </div>
                        <div className='card-row'>
                            <h2 className='montserrat card-plan-header'>Wellness Benefit</h2>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Benefit Payable per Month</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>$500</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className='card-plan-text card-benefits text-white'>Maximum Number of Days Payable</p>
                                <div className='hr flex-grow-1'></div>
                                <p className='card-plan-text text-white ms-auto'>12months</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container container'>
                <p className='fw-normal'>
                    * 3 options dependent upon which you qualify for.
                    <br></br><br></br>
                    ** The Limited Benefit Health Insurance Policy is a supplemental health plan.
                    <br></br><br></br>
                    *** The seven activities to receive a claim payment are: Telemedicine, DNA screening, 
                    Health Risk Assessment, Online Health coaching, Telephonic Health coaching, Online Wellness 
                    coaching, Biometric Screening.
                </p>
            </div>
        </>
    )
}

export default Plans