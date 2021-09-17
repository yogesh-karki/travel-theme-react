import React from 'react';



const StoryFigure = (props) => {
    return ( 
        <React.Fragment>
            <figure className="media-story" >
                <img src={props.img} alt="" />

                <div className="story-play">
                    <a href="#">
                        <img src="./images/assets/play.svg" alt="" />
                    </a>
                </div>
            </figure>
        </React.Fragment>
     );
}
 
export default StoryFigure;