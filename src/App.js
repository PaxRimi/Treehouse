import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Portfolio from './portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
