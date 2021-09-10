import React from 'react';

const NavBar = () => {
    return ( 
        <header>
                <div class="container">
                    <div class="nav-container">
                        <div class="logo">
                            <a href="index.html">
                                <img src="./images/assets/logo-color.svg" alt="" />
                            </a>
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <a href="">
                                        <div class="nav-item">
                                            Who we are

                                            <span class="subtitle">About Us</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div class="nav-item">
                                            Expedition

                                            <span class="subtitle">Services</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div class="nav-item">
                                            Breathless
                                            <span class="subtitle">World Highest Race</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div class="nav-item">
                                            Useful Info

                                            <span class="subtitle">A Tour Guide</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <div class="nav-item">
                                            Tailor-made Trips

                                            <span class="subtitle">& individually</span>
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
 
