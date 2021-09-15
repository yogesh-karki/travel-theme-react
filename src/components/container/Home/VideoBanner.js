import React from 'react';


const VideoBanner = () => {
    return ( 
        <React.Fragment>
            <section className="banner">
                <div className="video-container">
                    <video className="featured_video" poster="" autoPlay="autoPlay" playsInline="playsInline" muted="muted" loop="loop">
                        <source src="./images/videos/4 shots.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="banner-text">
                    <h1>New Perspective In beautiful mountains.</h1>

                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Discover Your Adventure..." />
                    <button><img src="images/assets/right-arrow.svg" alt="" /></button>
  
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default VideoBanner;