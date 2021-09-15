import React from 'react';
import Marker from './Marker'
import MarkerData from './MarkerData'


const Destination = () => {

    return ( 
        <React.Fragment>
            <section className="destinations" style = {{ background: 'url(/images/destinations-background.png)' }}>
                <div className="container">
                    <div className="destinations-head">
                        <span className="heading-subtitle">Experience Awaits</span>
                        <h4 className="heading-text">
                            Choose your Dream Destination
                        </h4>
                    </div>

                    <div className="nepal-map">
                        <img src="./images/nepal.png" alt="" />

                        {
                            MarkerData.map((val, index) => {
                                return(
                                    <Marker
                                        key= {index}
                                        top= {val.top}
                                        left={val.left}
                                    />
                                )
                            })
                        }

                    </div>

                    <div class="why-choose">
                        <div class="ch-item">
                            <ion-icon name="ribbon-outline" role="img" class="md hydrated" aria-label="ribbon outline"></ion-icon>

                            <div class="ch-item-des">
                                <h4>UNLIMITED PACKAGE</h4>
                                <p>Build a tailor made trip 
                                    in less time
                                </p>
                            </div>
                        </div>

                        <div class="ch-item">
                            <ion-icon name="flower-outline" role="img" class="md hydrated" aria-label="flower outline"></ion-icon>

                            <div class="ch-item-des">
                                <h4>EASY BOOKING</h4>
                                <p>Build a tailor made trip 
                                    in less time
                                </p>
                            </div>
                        </div>

                        <div class="ch-item">
                            <ion-icon name="finger-print-outline" role="img" class="md hydrated" aria-label="finger print outline"></ion-icon>

                            <div class="ch-item-des">
                                
                                <h4>SERVICE EXCELLENCE</h4>
                                <p>Build a tailor made trip 
                                    in less time
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Destination;