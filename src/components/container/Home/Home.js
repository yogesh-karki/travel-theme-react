import React from "react";
import VideoBanner from './VideoBanner';
import Introduction from './Introduction';
import Expedition from './Expedition';
import Destination from './Destination';
import StoryFigure from './StoryFigure';
import StoryData from '../Story/StoryData';



const Home = () => {

    

    return ( 
        <React.Fragment>
            <VideoBanner />
            <Introduction />
            <Expedition />
            <Destination />

            <section className="stories">
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

        </React.Fragment>
     );
}
 
export default Home;