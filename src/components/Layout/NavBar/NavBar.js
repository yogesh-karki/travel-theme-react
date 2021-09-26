import React from 'react';
import {  Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <header >
                <div className="container">
                    <div className="nav-container">
                        <div className="logo">
                            <Link to="/">
                                <img src="./images/assets/logo-color.svg" alt="" />
                            </Link>
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <Link to="/tour-detail">
                                        <div className="nav-item">
                                            Who we are

                                            <span className="subtitle">About Us</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <a href="">
                                        <div className="nav-item">
                                            Expedition

                                            <span className="subtitle">Services</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div className="nav-item">
                                            Breathless
                                            <span className="subtitle">World Highest Race</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div className="nav-item">
                                            Useful Info

                                            <span className="subtitle">A Tour Guide</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div className="nav-item">
                                            Tailor-made Trips

                                            <span className="subtitle">& individually</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
     );
}

export default NavBar
 
