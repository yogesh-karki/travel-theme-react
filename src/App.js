import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import CustomCursor from './components/Layout/CustomCursor/CustomCursor';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';



import './components/Layout/main.css';
import './components/Layout/reset.css';
import './components/Layout/responsive.css';





const App = () => {
  
  
  return (  
        <Router>
            <CustomCursor />
            
            <Layout />
        </Router>
     
    );
}
 
export default App;


