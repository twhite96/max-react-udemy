import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'bored_cheetah'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserOutput />
          <UserOutput />
          <UserOutput />
        </header>
      </div>
    );
  }
}

export default App;
