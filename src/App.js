import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import CustomCursor from './components/Layout/CustomCursor/CustomCursor';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import 'antd/dist/antd.css';



import './components/Layout/main.css';
import './components/Layout/reset.css';
import './components/Layout/responsive.css';







export default class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <CustomCursor />
            
            <Layout />
          </React.Fragment>
        </Router>
     
    )
  }
}

