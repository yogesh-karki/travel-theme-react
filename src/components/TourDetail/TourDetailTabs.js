import React, { useRef, useEffect } from 'react';
import { Tabs } from 'antd';
import Overview from './Overview';
import Itinerary from './Itinerary';



const { TabPane } = Tabs;

const operations = <button className='book-btn'><ion-icon name="create-outline"></ion-icon> Book this trip</button>;




const TourDetailTabs = () => {
     const tabs = useRef()
    function callback(key) {
        // console.log(key);
    }

    useEffect(() =>{
        const test = document.querySelector(".tab-content .content-head h3");
        console.log(test);




    })
    

    

    return ( 
        <React.Fragment>
            <section className="tabs" ref={tabs} style={{ background: 'url(/images/bg-snow.jpg)' }}>
                <div className="container">
                <Tabs defaultActiveKey="1" className="tour-tabs" onChange={callback} tabBarExtraContent={operations}>
                    <TabPane tab="Experience" key="1">
                        <Overview />
                    </TabPane>
                    <TabPane tab="Itinerary" key="2">
                        <Itinerary />
                    </TabPane>
                    <TabPane tab="Pratical Info" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Date & Prices" key="4">
                    Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="FAQ" key="5">
                    Content of Tab Pane 4
                    </TabPane>
                    <TabPane tab="Reviews" key="6">
                    Content of Tab Pane 5
                    </TabPane>
                </Tabs>
                </div>

 
            </section>
        </React.Fragment>
     );
}
 
export default TourDetailTabs;