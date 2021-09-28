import React from 'react';


import './style.css'

const Overview = () => {

    return ( 
        <section className="tab-content overview" >
            {/* <div className="content-head">
                <h3>Experience
                <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                </h3>
            </div> */}

            <h4 className='heading-style'>Experince the North face expedition Summit Pyramid, from here you will see the shining crystals from top of the world.</h4>

            <div className="row ">
                <div className="col-md-9">
                    
                    <div className="content-text padding-right">
                        <div className="overview-short">
                            <p>
                                Talking about the north route, one climber noted, the North Face is a place
                                where a simple slip would mean death. North face expedition mainly starts 
                                from Tibet side. Chinese climbers claimed to have reached the top via north
                                route for the first time in 1960, which was not accepted because of lacking
                                photographic evidence. 
                            </p>

                            <p>
                            he Base camp is situation just below the Rongbuk Monastery. It is about 20 km trek to reach the Advanced Base Camp (ABC).
                            ABC is situated on rugged and fragmented ground with high speed winds welcoming you. From ABC to East Rongbuk Glacier,
                             it’s fairly easy, following the snowy slopes to the North col, you will reach Camp I. The camp I rests between Everest 
                             and Changtse. Following long snowy slope, you will reach the camp II. The course from camp II to camp III is very stormy
                              Topography here is made up of rocks, which look fairly simple, but a slip here means death. However,
                               there are ropes in place, which gives some senses of safety. From camp III, climbers will feel the 
                               need of oxygen; the route from camp III to camp IV is mixture of rocky steps. On this way you will find 
                               fixed ropes, which will lead you to right direction to the mountain. Camp IV is small camp; you will want 
                               to spend as little time here as possible.
                            </p>

                            <p>
                                You will continue onto the North East Ridge, where you will encounter 
                               the first obstacle known as the first step. First step is rock structure about 30 meters high. Some steep rock 
                               climbing will lead you to second steps; second step is the most challenging of the entire obstacle. This is about 
                               40m in height. 
                            </p>

                            <div className="trip-highlights">
                                <label className="small-heads">Trip Highlights</label>
                                <ul>
                                    <li>Old Thingri to Chinese Basecamp (5,100m), Via Rombuk Monastery</li>
                                    <li>Nights Stay in Chinese Basecamp</li>
                                    <li>Drive back from Chinese Basecamp to Thingri</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-3">
                    <div className="travel-guide">
                        <img src="./images/story/story-tashi.jpg" alt="" />
                        <h5>Tashi Lakpa Sherpa</h5>
                        <p>Expedition Specialist</p>
                    </div>
                </div>
            </div>

            <div className="itinerary-options">
                <div className="content-head">
                    <h3>14 Peak Trip Options
                    <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                    </h3>
                    
                    <p>Adjusting the package to your budget and preferences </p>

                </div>


                <div className="options-wrap">
                    <div className="option-card">
                        <h4>Budget Friendly</h4>

                        <ul>
                            <li>11 Nts / 10 Days</li>
                            <li>Three nights at 3 Star Hotel</li>
                            <li>Nine nights dorms</li>
                        </ul>

                    </div>

                    <div className="option-card">
                        <h4>Luxury & Style</h4>

                        <ul>
                            <li>14 Nts / 13 Days</li>
                            <li>Four nights at 5 Star Hotel</li>
                            <li>All private rooms</li>
                            <li>Private Airport Transfers</li>
                            <li>One rest day</li>
                            <li>First day guide</li>
                        </ul>

                    </div>

                    <div className="option-card">
                        <h4>With Comfort</h4>

                        <ul>
                            <li>13 Nts / 12 Days</li>
                            <li>Three nights at 4 Star Hotel</li>
                            <li>All private room</li>
                            <li>Baggage Transfer</li>
                            <li>Shared Airport Transfer</li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Overview;