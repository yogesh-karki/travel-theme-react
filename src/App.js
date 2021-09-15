import React, { Component } from 'react';
import Layout from './components/Layout/Layout';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import '../node_modules/antd/dist/antd.css';

import './components/Layout/main.css';
import './components/Layout/reset.css';
import './components/Layout/responsive.css';






export default class App extends Component {
  render() {
    return (
      
        <React.Fragment>
          <Layout />
        </React.Fragment>
     
    )
  }
}

