import React from 'react';

const Itinerary = () => {
    return ( 
        <section className="tab-content">
            <div className="content-head">
                <h3>Itinerary
                <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                </h3>
                <p>Tracking Days</p>
            </div>

            {/* <div className="full-width-img">
                <img src="./images/Itinerary.jpg" alt="" />
            </div>

            <div className="content-head">
                <h3>
                <span style={{ background: 'url(/images/mount-after-01.svg)' }}></span>
                </h3>

                <p>Itinerary</p>
            </div> */}

            <div className="content-text">
                <p>
                    Lorem ipsum dolor, temporibus aperiam reiciendis aspernatur iste tempore exercitationem in earum harum, sint animi natus voluptatibus ratione molestias at aut sunt numquam dolor commodi ut ducimus? Eius ullam quia fuga maiores et consectetur quam explicabo earum iusto dolor, autem dignissimos sunt voluptas hic itaque quae. Quia, deserunt? Dolores harum cum odit, perferendis cumque, voluptate perspiciatis vero, earum pariatur modi commodi amet nesciunt!
                </p>
            </div>

            <div className="it-list">
                

                <div className="it-wrap">
                    <div className="day-title">
                        <span>Day 1</span>
                        <h5>Arrival in Kathmandu Airport</h5>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perferendis neque molestiae eius exercitationem asperiores quisquam cumque porro non pariatur atque quibusdam repellendus, sit dolor blanditiis quod! Molestiae, quam suscipit voluptatum non, temporibus ducimus, magni error velit aliquam id odit vel. Perspiciatis hic ex id repellendus dignissimos in reiciendis vel!</p>
                </div>

                <div className="it-wrap">
                    <div className="day-title">
                        <span>Day 2</span>
                        <h5>Rest Day in Kathmandu</h5>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perferendis neque molestiae eius exercitationem asperiores quisquam cumque porro non pariatur atque quibusdam repellendus, sit dolor blanditiis quod! Molestiae, quam suscipit voluptatum non, temporibus ducimus, magni error velit aliquam id odit vel. Perspiciatis hic ex id repellendus dignissimos in reiciendis vel!</p>
                </div>

                <div className="it-wrap">
                    <div className="day-title">
                        <span>Day 13 - 14</span>
                        <h5>Flight from Kathmandu to Namche (3,850m) and Acclimatization</h5>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum perferendis neque molestiae eius exercitationem asperiores quisquam cumque porro non pariatur atque quibusdam repellendus, sit dolor blanditiis quod! Molestiae, quam suscipit voluptatum non, temporibus ducimus, magni error velit aliquam id odit vel. Perspiciatis hic ex id repellendus dignissimos in reiciendis vel!</p>
                </div>
            </div>


        </section>
     );
}
 
export default Itinerary;