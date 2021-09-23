import React from "react";

const TestimonialSlides = (props) => {
    return ( 
        <div className="testimonial-item">
            <div className="ti-img">
                <img src={props.img} alt="" />
            </div>

            <div className="ti-desc">
                <h5>{props.name}</h5>
                <span>{props.profession}</span>
                <p>{props.testimonial}</p>
            </div>
        </div>
     );
}
 
export default TestimonialSlides;