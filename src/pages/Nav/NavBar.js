import React from 'react'
import "./NavBar.css"
import { routes } from "./routes"


//TODO: fix pathing for ListItemLink's
const NavBar = () => {


    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg'>
                <div className='container mx-auto'>
                    <a className='navbar-brand nav-logo' href='/'>
                        <img src="assets/img/Qfamily-LogosC-03.png" className='nav-img' />
                    </a>
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavBar"
                        aria-controls="mainNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mainNavBar'>
                        <div className='navbar-nav heading'>
                            <a className='nav-link active visually-hidden' aria-current='page' href='/'>Home</a>
                            <a className='nav-link' href='/plans'>Plans</a>
                            <a className='nav-link' href='/personal-health-dashboard'>Dashboard</a>
                            <a className='nav-link visually-hidden' href='/videos'>Videos</a>
                            <a className='nav-link' href='/contact-us'>Contact Us</a>
                            <a className='nav-link' href='https://qsure.ushealthcenter.com/Activate'>Login</a>
                        </div>
                    </div>                    
                </div>
            </nav>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar