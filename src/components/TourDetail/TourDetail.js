import React from 'react';
import InnerBanner from '../Layout/InnnerBanner/InnerBanner'

import Feature from './Feature'
import TourDetailTabs from './TourDetailTabs'



const TourDetail = () => {
    return ( 
        <React.Fragment>
            <InnerBanner />
            <Feature />
            <TourDetailTabs />

        </React.Fragment>
     );
}
 
export default TourDetail;