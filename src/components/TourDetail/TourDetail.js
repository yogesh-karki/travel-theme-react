import React from 'react';
import InnerBanner from '../Layout/InnnerBanner/InnerBanner'

import Feature from './Feature'
import TourDetailTabs from './TourDetailTabs'
import Highlights from  './Highlights'



const TourDetail = () => {
    return ( 
        <React.Fragment>
            <InnerBanner />
            <Feature />
            <TourDetailTabs />
            <Highlights />
        </React.Fragment>
     );
}
 
export default TourDetail;