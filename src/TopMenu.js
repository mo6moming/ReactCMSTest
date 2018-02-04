import React, { Component } from 'react';
import logo from './logo.svg';
import './TopMenu.css';
//import { StickyContainer, Sticky } from 'react-sticky';
import Sticky from 'react-sticky-el';

import { Link } from 'react-router-dom'

var createReactClass = require('create-react-class');

var TopMenu = createReactClass({

  getInitialState: function(){
      return { focused: 0,  hover: 0};
  },

  clicked: function(index){

      // The click handler will update the state with
      // the index of the focused menu entry

      this.setState({focused: index});
  },
  onMouseEnter(index){
    this.setState({
        hover: index,
    });
  },

  onMouseLeave(index){
    this.setState({
        hover: index,
    })
  },

  render: function() {

      // Here we will read the items property, which was passed
      // as an attribute when the component was created

      var self = this;
      // The map method will loop over the array of menu entries,
      // and will return a new array with <li> elements.


  if (this.props.items !== undefined ) {
      return (


          <div id="topmenucontainer">

              <Sticky>

              <div class="pure-menu pure-menu-horizontal" id="menu">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item pure-menu-selected"><Link to='/'>Home</Link></li>

                      <li class="pure-menu-item pure-menu-selected"><Link to='/about'>About</Link></li>

                      <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                          <a href="#" id="menuLink1" class="pure-menu-link">Contact</a>
                          <ul class="pure-menu-children">
                              <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                <a href="#" id="menuLink2" class="pure-menu-link">Email</a>
                                  <ul class="pure-menu-children2">
                                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Email1</a></li>
                                    <li class="pure-menu-item"><a href="#" class="pure-menu-link">Email2</a></li>
                                  </ul>
                                </li>
                              <li class="pure-menu-item"><a href="#" class="pure-menu-link">Twitter</a></li>
                              <li class="pure-menu-item"><a href="#" class="pure-menu-link">Tumblr Blog</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>

              </Sticky>

          </div>

        );
        }
        else {
          return (
            <div>
            <h1>No Header Defined</h1>

            </div>
          );
        }

  }
});

export default TopMenu;
