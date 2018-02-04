import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideMenu from  './SideMenu';

import TopMenu from  './TopMenu';

import LeftMain from './LeftMain';

import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <div>
            <TopMenu items={ ['Home', 'Services', 'About', 'Contact us'] } />
            <Main />
          </div>

          <div>
            <LeftMain />
          </div>

          <div>
            <rightmain />
          </div>


          {/*}
            div id='header'>
            <div id='container'>
              <div id="leftmain">Left Side Menu</div>
              <div id="rightmain">Right Side Menu</div>
              */
            }


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
