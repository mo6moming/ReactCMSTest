import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LeftMain from './LeftMain';

import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';

import styled from 'styled-components';

import { Router, Route, BrowserRouter } from 'react-router-dom'

import SideMenu from  './SideMenu';

import TopMenu from  './TopMenu';

import About from './About/About'
import Resource from './Resource/Resource'


render((
  <BrowserRouter>
   <div>
    <App />
    </div>
  </BrowserRouter>
), document.getElementById('root'));


{/* render(<TopMenu items={ ['Home', 'Services', 'About', 'Contact us'] } />, document.getElementById('header')); */}

{/*render(<SideMenu />, document.getElementById('app')); */}

{/* render(<LeftMain />, document.getElementById('leftmain')); */}

{/* render(<App />, document.getElementById('root')); */}

registerServiceWorker();
