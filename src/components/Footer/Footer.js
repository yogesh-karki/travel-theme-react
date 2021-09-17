import React from 'react'

const Footer = () => {
    return ( 
        <React.Fragment>
            <footer style = {{ background: 'url(/images/footer-background.png)' }}>
                <div className="container">
                    <div className="ft-top">
                        <nav className="footer-menu">
                            <a href="">Travel Insurance</a>
                            <a href="">Terms & Conditions</a>
                            <a href="">Expertise</a>
                            <a href="">Gallery</a>
                            <a href="">Gear List</a>
                            <a href="">FAQs</a>
                        </nav>

                        <div className="footer-social">

                            <a href=""><i className="fab fa-facebook-f"></i> </a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                        
                        </div>
                    </div>

                    <div className="footer-cpy-rights">
                        <div>
                            <p>© 14 Peak Expedition. All Rights Reserved</p>
                            <p>Website by <a href="" target="_blank" >Hue Shine</a></p>
                        </div>

                        <div className="footer-logo">
                            <img src="./images/assets/footer-logo.svg" alt="" />
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>We accept</p>
                        <img src="./images/footer-images/visa.png" alt="" />
                        <img src="./images/footer-images/mastercard.png" alt="" />
                        <img src="./images/footer-images/americanexpress.png" alt="" />
                        <img src="./images/footer-images/jcb.png" alt="" />
                    </div>
                </div>
            </footer>
        </React.Fragment>
     );
}
 
export default Footer;