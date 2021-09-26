import React from 'react';
// import gsap from 'gsap';
// import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

const Itinerary = () => {



    return ( 
        <section className="tab-content " >
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

            <div class="line">
                <svg xmlns="http://www.w3.org/2000/svg" width="988.158" height="1529.259" viewBox="0 0 988.158 1529.259"><path id="line1" d="M4.742,1429.287s-38.154-192.173,101.995-344.562c0,0,98.428-85.412,231.493-138.931,181.019-72.8-142.043-264.747-36.467-341.541,108.548-77.052-35.2-195.839,79.555-308.91,106.781-100.37,270-63.53,343.309-155.019S697.908,10.057,697.908,10.057" transform="matrix(-0.985, 0.174, -0.174, -0.985, 989.023, 1407.851)" fill="none" stroke="#0080c5" stroke-miterlimit="10" stroke-width="1.5" stroke-dasharray="16 16" fill-rule="evenodd" opacity="0.2"></path></svg>
            </div>

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