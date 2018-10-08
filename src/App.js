import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Portfolio from './portfolio';
import Service from './service';
import MoreInfo from './moreInfo';
import Project from './project';
import OurValuse from './ourValues';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Portfolio/>
        <Service/>
        <MoreInfo/>
        <Project/>
        <OurValuse/>
      </div>
    );
  }
}

export default App;
