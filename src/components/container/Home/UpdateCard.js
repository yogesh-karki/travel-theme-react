import React, {useEffect} from 'react';
import {ButtonDark } from '../../Button';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const UpdateCard = ( props ) => {
    useEffect(() =>{
        const tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".featured",
                start: 'top center',
                end: "bottom center",
                scrub: true,
                duration: 3,
            }
        })
    
        tl.fromTo('.latest-item', {
            x: 300,
        },{
            x: -150,
        })
    
    
    })

    return ( 
        <div className="latest-item">
            <div className="latest-img">
                <img src={props.img} alt="" />
            </div>

            <h5>{props.title}</h5>
            <p>
                {props.description}
            
            </p>

            <ButtonDark btnText={'Discover Trip'} />
        </div>
     );
}
 
export default UpdateCard;