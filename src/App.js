import React, { Component } from 'react';
import logo from './logo.svg';
import {Navigation} from './components/core/common/navigation';
import Home from './components/core/main/home';
import './App.css';
import {Layout} from 'antd'

class App extends Component {
  render() {
    return (<div>
        <Navigation/>
        <div className="container">
        <Home/>
          </div>
          </div>)

      // <div className="App">

      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

  }
}

export default App;
