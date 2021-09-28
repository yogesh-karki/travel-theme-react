import React from "react";
import VideoBanner from './VideoBanner';
import Introduction from './Introduction';
import Expedition from './Expedition';
import Destination from './Destination';
import StoryFigure from './StoryFigure';
import StoryData from '../Story/StoryData';
import TopFooter from "./TopFooter";

import Updates from './Updates';
import {ButtonDark } from '../../Button'
import TestimonialSlides from "./TestimonialSlides";
import TestimonialData from "../Testimonial/TestimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";


const Home = () => {

    

    return ( 
        <React.Fragment>
            <VideoBanner />
            <Introduction />
            <Expedition />
            <Destination />

            <section className="stories" style={{ background:'url(/images/star-background.png)' }} >
                <div className="container">
                    <div className="scrub-head">
                        <h2>Inspriring stories</h2>
                    </div>

                    <div className="story-article">
                        <div className="story-header-content">
                            <span className="heading-subtitle">Overcoming Fears</span>
                            <h4 className="heading-text">Inspriring Stories</h4>

                            <p>
                                Inspirational Stories Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam saepe corrupti corporis dignissimos consequuntur maxime fugiat, voluptate quia
                            </p>
                        </div>

                        <div className="story-right">
                
                            {
                                StoryData.slice(0, 2).map( (val , index) => {
                                    return(
                                        <StoryFigure 
                                            key={index}
                                            img= {val.img}
                                        />
                                    )
                                } )
                            }
                        </div>

                        <div className="story-left">
                            {
                                StoryData.slice(2, 5).map( (val , index) => {
                                    return(
                                        <StoryFigure 
                                            key={index}
                                            img= {val.img}
                                        />
                                    )
                                } )
                            }
                        </div>
                    </div>
                </div>
            </section>


            <section className="tailor-made" >
                <div className="container">
                    <div className="tm-wrap">
                        <div className="tm-article" style={{ background:'url(/images/tailor-made.png)' }}>
                                <div className="tm-article-wrap">
                                    <h4 className="heading-text">An Idea? A Travel Plan?</h4>

                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Omnis cum maxime at soluta delectus repudiandae quibusdam 
                                    culpa, dolorum quod molestiae repudiandae officiis? 
                                </p>

                                <p>
                                    Eaque quam cum, expedita, qui tempore cumque quod obcaecati nihil 
                                    nostrum possimus totam!
                                </p>

                                <ButtonDark btnText={'Make Your Own trip'} />
                                
                            </div>
                        </div>

                        <div className="testimonials">
                            <div className="twrap">
                                <h4 className="heading-text">
                                    Our Travelers
                                </h4>
                            </div>

                            <Swiper slidesPerView={1} pagination={true} centeredSlides={true} loop={true} speed={500}  
                            className="testimonial ">
                                {
                                    TestimonialData.map((val, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <TestimonialSlides 
                                                
                                                img={val.img}
                                                name={val.name}
                                                profession={val.profession}
                                                testimonial= {val.testimonial} 

                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }

            

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            
            <Updates />

            <TopFooter />     

        </React.Fragment>
     );
}
 
export default Home;