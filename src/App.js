import React, { Component } from 'react';
import logo from './logo.svg';
import { Navigation } from './components/core/common/navigation';
import Footer from './components/core/common/footer';
import Home from './components/core/main/home';
import './App.css';
import { Layout } from 'antd'
import withSizes from 'react-sizes'
// import SideDrawer from './components/core/common/SideDrawer/SideDrawer';
// import Backdrop from './components/Backdrop/Backdrop'

class App extends Component {
  render() {
    console.log(this.props.isMobile);
    return (<div>
      <Navigation />
      {/* <SideDrawer/>
      <Backdrop/> */}
      <div className="container">
        <Home isMobile={this.props.isMobile} />
      </div>
      <Footer isMobile={this.props.isMobile}/>
    </div>)
  } 
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})

export default withSizes(mapSizesToProps)(App)
