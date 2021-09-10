import React from "react";

const Introduction = () => {
    return ( 
        <React.Fragment>
            <section className="intro-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="intro-head">
                                <h4 className="heading-text">Love & Persistence in climbing mountains have transformed life</h4>
                            </div>
        
                            <div className="intro-text" >
                                <p>
                                    When it comes to scaling the peaks,
                                    dangers are plenty. Although the
                                    mountains seem serene and gentle
                                    from a distance, the weather there this
                                    treacherous. The terrain can be
                                    downright unforgiving and to have
                                    someone accompanying you
                                </p>
        
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Doloribus, quasi. 
                                    Animi deserunt corrupti non enim exercitationem
                                    optio debitis aliquam, iste omnis ex sint, 
                                    dolorem molestiae sequi! Dolorum labore
                                    praesentium illum!
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="intro-img">
                                <img src="./images/intro-img.jpg"></img>
                            </div>
                        </div>

                        {/* <div className="col-md-4">
                            <div className="intro-img" >
                                <img src="./images/intro-img.jpg" alt="">
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="intro-video">
                        <div className="play-btn">
                            <a href=""><img src="./images/assets/play.svg" alt=""></a>
                        </div>
                    </div> */}
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Introduction;