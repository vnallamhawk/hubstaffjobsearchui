import React, { Component } from 'react';
import logo from './logo.svg';
import { Navigation } from './components/core/common/navigation';
import Footer from './components/core/common/footer';
import Home from './components/core/main/home';
import './App.css';
import { Layout } from 'antd'

class App extends Component {
  render() {
    return (<div>
      <Navigation />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>)
  }
}

export default App;
