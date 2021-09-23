import React from 'react';

// import FeatureData from './FeatureData'

const Feature = () => {
    return ( 
        <React.Fragment>
            <section className="features">
                <div className="container">
                    <div className="feature-wrap">
                        <div className="feature-card">
                            <img src="./images/features-icon/duration.svg" alt="" />

                            <div className="card-desc">
                                <p>Duration</p>
                                <h6>14 D/N</h6>
                            </div>


                        </div>
                        
                        <div className="feature-card">
                            <img src="./images/features-icon/accomodation.svg" alt="" />
                            <div className="card-desc">
                                <p>Accomodation</p>
                                <h6>Hotel + Lodge</h6>
                            </div>
                        </div>

                        <div className="feature-card">
                            <img src="./images/features-icon/ascent.svg" alt="" />
                            <div className="card-desc">
                                <p>Max Ascent</p>
                                <h6>8848m</h6>
                            </div>
                        </div>

                        <div className="feature-card">
                            <img src="./images/features-icon/difficulty.svg" alt="" />
                            <div className="card-desc">
                                <p>Difficulty</p>
                                <h6>Extreme</h6>
                            </div>
                        </div>

                        <div className="feature-card">
                            <img src="./images/features-icon/map.svg" alt="" />
                            <div className="card-desc">
                                <p>Waliking per Day</p>
                                <h6>7 - 12 Hrs</h6>
                            </div>
                        </div>

                        <div className="feature-card">
                            <img src="./images/features-icon/availability.svg" alt="" />
                            <div className="card-desc">
                                <p>Next AVAILABILITY</p>
                                <h6>March - April</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Feature;