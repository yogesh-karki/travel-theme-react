import React , {useEffect, useRef} from 'react'
import gsap from 'gsap';


const TopFooter = () => {
    const topImg= useRef();
    const cloudLeft = useRef();
    const cloudRight = useRef();
    const bottomImg= useRef();
    const logoText = useRef();
    const slideOne= useRef();
    const slideTwo = useRef();

    useEffect(() =>{
        var t1 = new gsap.timeline();

        t1.from('.top-img', {
            y: 500,
            duration: 3,
        }) 
    })

    return ( 
        <section className="anim-wrap">
            <section className="footer-animations">
                    <img src="./images/footer/top.png" alt="" ref={topImg} className="top-img" /> 
                    <img src="./images/footer/clouds.png" alt="" ref={cloudLeft} className="cloud cloud-left" />
                    <img src="./images/footer/clouds.png" alt="" ref={cloudRight} className="cloud cloud-right" /> 
                    <img src="./images/footer/bottom.png" alt="" ref={bottomImg} className="bottom-img" />
                    <img src="./images/footer/footer-text.png" alt="" ref={logoText} className="logo-text" />
                    <img src="./images/footer/cloud-slides1.png" ref={slideOne} className="cloud-slides slideOne" alt="" />
                    <img src="./images/footer/cloud-slides2.png" ref={slideTwo} className="cloud-slides slideTwo" alt="" />
            </section>
        </section>
     );
}
 
export default TopFooter;