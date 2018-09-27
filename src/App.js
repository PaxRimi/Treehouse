import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Portfolio from './portfolio';
import Service from './service';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Portfolio/>
        <Service/>
      </div>
    );
  }
}

export default App;
