import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: 'bored_cheetah'
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput
            changed={this.handleUsernameChange}
            currentUser={this.state.username}
          />
          <UserOutput
            user={this.state.username}
          />
          <UserOutput
            user={this.state.username}
          />
          <UserOutput
            user='cranky_potato'
          />
        </header>
      </div>
    );
  }
}

export default App;
