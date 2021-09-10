import React from "react";
import VideoBanner from './VideoBanner';
import Introduction from './Introduction';
import Expedition from './Expedition'



const Home = () => {
    return ( 
        <React.Fragment>
            <VideoBanner />
            <Introduction />
            <Expedition />

        </React.Fragment>
     );
}
 
export default Home;