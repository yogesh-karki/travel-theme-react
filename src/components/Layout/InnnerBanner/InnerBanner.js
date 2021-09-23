import React, {useRef, useEffect} from 'react';




const InnerBanner = () => {
    const backgroundImage= useRef();
    

    useEffect(() =>{
        var followX = 0,
            followY = 0,
            x = 0,
            y = 0,
            friction = 1/ 30;

        function moveBackground() {
            x +=(followX - x ) * friction ;
            y +=(followY - y ) * friction ;

            backgroundImage.current.style.transform = `translate(${x}px, ${y}px) scale(1.2)`
        }    

        
        document.querySelector('.inner-banner').addEventListener('mousemove', (e) => {

            var lMouseX = 0.2 - x / 2 - e.clientX ;
            var lMouseY = 0.3 - y / 2 - e.clientY ;

            followX = (20 * lMouseX) / 300;
            followY = (10 * lMouseY) / 200;
            
            moveBackground();

        },[])


    
    })

    return ( 
        <React.Fragment>
            <section className="inner-banner"  >
                <div className="ib-bg" ref={backgroundImage} style={{ background: 'url(/images/inner-banner1.jpg)' }}></div>
                <div className="text">
                    <p>A purely artistic journey to the mother nature</p>
                    <h2>Everest Base Camp Via Kalapather</h2>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default InnerBanner;