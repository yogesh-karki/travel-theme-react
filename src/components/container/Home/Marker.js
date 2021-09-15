import React from 'react';


const Marker = (props) => {
    return ( 

        <div className="marker-region" style= {{ top: props.top, left: props.left }}>
            <div className="marker-icon">
                <ion-icon name="location-outline"></ion-icon>
            </div>
        </div>
     );
}
 
export default Marker;
