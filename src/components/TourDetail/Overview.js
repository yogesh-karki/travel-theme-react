import React from 'react';


import './style.css'

const Overview = () => {

    return ( 
        <section className="tab-content overview" >
            <div className="content-head">
                <h3>Experience
                <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                </h3>
                

            </div>

            <div className="content-text">
                <p>
                    Talking about the north route, one climber noted, the North Face is a place
                     where a simple slip would mean death. North face expedition mainly starts 
                     from Tibet side. Chinese climbers claimed to have reached the top via north
                      route for the first time in 1960, which was not accepted because of lacking
                       photographic evidence. Reinhold Messner who is regarded as the greatest climber
                        ever, he pioneered a new road on the north col face. He trekked the Northwest
                         route for three days only himself from his base camp at 6,500 metres without 
                         oxygen tanks for the first time in the history in 1980. In the same year Takashi
                          Ozaki and Tsuneo Shigehiro become the first to scale Mount Everest from the 
                          North Face. Climbing from the North side is a perfect opportunity to see how you 
                          perform at an extreme altitude. North Face-NE Ridge is a perfect choice to make
                           the success happen without less crowd comparing to south every year.
                </p>

                <p>
                    Topography here is made up of rocks, which look fairly simple, but a slip here means 
                    death. However, there are ropes in place, which gives some senses of safety.
                </p>
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