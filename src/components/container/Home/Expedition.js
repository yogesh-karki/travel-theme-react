import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// import './swiper/swiper-bundle.css'

import "swiper/swiper.scss";
// import "swiper/css/pagination"



// import 'swiper/css';

const Expedition = () => {
    return ( 
        <React.Fragment>
            <section className= "activities">
                <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30} pagination={{
                "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className="activity-head">
                            <div className="item-background">
                                <span className="heading-subtitle">Unforgettable Experience</span>
                                <h4 className="heading-text">Expedition Services</h4>

                                <p>Achieve your goal and dream.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam?
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="activity-card">
                            <a href="">
                                <img src="./images/mountain.jpg" alt="" />
                                <div className="title-card">
                                    <figure>
                                        <img src="./images/assets/mountain.svg" alt="" />
                                    </figure>
                                    <h5>Mountaineering</h5>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="activity-card">
                            <a href="">
                                <img src="./images/trek.jpg" alt="" />
                                <div className="title-card">
                                    <figure>
                                        <img src="./images/assets/hiking.svg" alt="" />
                                    </figure>
                                    <h5>Trekking</h5>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="activity-card">
                            <a href="">
                                <img src="./images/heli.jpg" alt="" />
                                <div className="title-card">
                                    <figure>
                                        <img src="./images/assets/heli-trek.svg" alt="" />
                                    </figure>
                                    <h5>Heli Trek</h5>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="activity-card">
                            <a href="">
                                <img src="./images/temple.jpg" alt="" />
                                <div className="title-card">
                                    <figure>
                                        <img src="./images/assets/mountain.svg" alt="" />
                                    </figure>
                                    <h5>Nepal Tour</h5>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="activity-card">
                            <a href="">
                                <img src="./images/lake.jpg" alt="" />
                                <div className="title-card">
                                    <figure>
                                        <img src="./images/assets/heli-trek.svg" alt="" />
                                    </figure>
                                    <h5>Heli Trek</h5>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </section>
        </React.Fragment>
     );
}
 
export default Expedition;