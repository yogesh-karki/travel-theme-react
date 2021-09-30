import React , {useEffect, useRef} from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TopFooter = () => {
    const topImg= useRef();
    const cloudLeft = useRef();
    const cloudRight = useRef();
    const bottomImg= useRef();
    const logoText = useRef();
    const slideOne= useRef();
    const slideTwo = useRef();

    useEffect(() =>{

        gsap.to(logoText.current, {
            scrollTrigger: {
                trigger: ".footer-animations",
                start: 'top top',
                end: "bottom bottom",
                scrub: 1
            },
            scale: 1.1,
            y: -400
        })

        var t1 = new gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".footer-animations",
                    start: 'top top',
                    end: "bottom bottom",
                    scrub: 3,
                    pin: true,
                  }
            }
        );

        t1.fromTo(bottomImg.current,{
            y: 0,
        },{
            y: -150
        })

        t1.fromTo(topImg.current, {
            scale: 1
        }, { 
            scale: 1.3
        },0);


        var tlClouds = new gsap.timeline({
            scrollTrigger: {
                trigger: ".footer-animations",
                start: 'top center',
                end: "bottom bottom",
                scrub: 3,
                duration: 10
            }
        })

        tlClouds.fromTo(cloudLeft.current, {
            x: -100,
            opacity: 0.6
        },{
            xPercent: 100,
            scale: 1.2,
            opacity: 1
        })

        tlClouds.fromTo(cloudRight.current, {
            x: 100,
            opacity: 0.8
        },{
            xPercent: -100,
            scale: 1.2,
            opacity: 1
        },0)


        const clouds = document.querySelectorAll('.cloud-slides')

        for(let i = 0; i < clouds.length; i++) {
            gsap.fromTo(clouds[i], {
                x: -1702.41,
                y:  200
            }, {
                duration: 15,
                x: 0,
                repeat: 1,
                ease: 'none',
                y: -200
            })
        }

    })

    return ( 
        <section className="anim-wrap" >
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