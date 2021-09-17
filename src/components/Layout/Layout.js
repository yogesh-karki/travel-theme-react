import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../container/Home/Home';



const Layout = () => {
    return ( 
        <React.Fragment>
            <NavBar />

            <Home />
        </React.Fragment>
     );
}
 
export default Layout;