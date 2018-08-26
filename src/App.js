import React, { Component } from 'react';
import logo from './logo.svg';
import { Navigation } from './components/core/common/navigation';
import Footer from './components/core/common/footer';
import Home from './components/core/main/home';
import './App.css';
import { Layout } from 'antd'
import SideDrawer from './components/core/common/SideDrawer/SideDrawer';

class App extends Component {
  render() {
    return (<div>
      <Navigation />
      <SideDrawer/>
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>)
  }
}

export default App;
