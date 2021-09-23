import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from "./Footer/Footer";
import FooterLogos from "./Footer/FooterLogos";
import Home from '../container/Home/Home';
import TourDetail from '../TourDetail/TourDetail'





const Layout = () => {
    return ( 
        <React.Fragment>
                <NavBar />
                    <Switch>
                        <Route path="/" exact component={Home} ></Route>
                        <Route path="/tour-detail" exact component={TourDetail} ></Route>

                    </Switch>

                <FooterLogos />
                <Footer />
        </React.Fragment>
     );
}
 
export default Layout;