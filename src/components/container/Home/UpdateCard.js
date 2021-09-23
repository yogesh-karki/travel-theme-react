import React from 'react';
import {ButtonDark } from '../../Button';


const UpdateCard = ( props ) => {
    

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