import React, {useState, useRef, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from "./Footer/Footer";
import FooterLogos from "./Footer/FooterLogos";
import Home from '../container/Home/Home';
import TourDetail from '../TourDetail/TourDetail'
import LocoScroll from './Hooks/LocoScroll';



const Layout = () => {
    
    




    const [preloader , setPreloader] = useState(true);

    LocoScroll(!preloader);

   

    const [timer, setTimer] = useState(3);

    const id = useRef(null)

    const clear = ()=> {
        window.clearInterval(id.current);
        setPreloader(false);
    }

    useEffect(() =>{
        id.current= window.setInterval(()=> {
            setTimer((timer)=> timer-1)
        }, 3000)
    },[])

    useEffect(() =>{
        if(timer=== 0) {
            clear();
        }
    },[timer])

    
    


    return ( 

        
        <div id="main-container"  >
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/tour-detail" exact component={TourDetail} ></Route>

            </Switch>
            <FooterLogos />
            <Footer />
        </div>
     
     );
}
 
export default Layout;