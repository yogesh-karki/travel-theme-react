import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import UpdateCard from './UpdateCard';
import UpdateData from '../Update/UpdateData';

const Updates = () => {
    return ( 
        <React.Fragment>
            <section className="featured">
                <div className="container">
                    <div className="featured-head">
                        <span className="heading-subtitle">Never Too Late To Join Us</span>
                        <h4 className="heading-text">Latest Update</h4>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                            . Est officia provident veniam quod natus consequatur 
                            architecto ullam ipsa, aliquid earum?
                        </p>
                    </div>
                </div>

                <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} pagination={{
                    "clickable": true
                    }} className="latest-slider ">
                        
                    {
                        UpdateData.map((val, index) => {
                            return (
                                <SwiperSlide>
                                    <UpdateCard 
                                    key={index}
                                    img={val.img}
                                    title={val.title}
                                    description= {val.description} 

                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                        
                        


                </Swiper>
            </section>
        </React.Fragment>
     );
}
 
export default Updates;