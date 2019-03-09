import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
		persons: [
      {name: 'Max', age: 28},
		  {name: 'Manu', age: 29},
		  {name: 'Stephanie', age: 26}
    ],
    otherState: 'some value'
	}

	handleNameSwitch = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: NEVER MUTATE STATE!!! this.state.persons[0].name = 'Maximillian'
    this.setState({
      persons: [
      {name: 'Maximillian', age: 28},
		  {name: 'Manu', age: 29},
		  {name: 'Stephanie', age: 27}
     ]
   })
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h1>Hi, I'm a React app</h1>
			      <button onClick={this.handleNameSwitch}>Switch Me</button>
			        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
			        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
			        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
         </header>
      </div>
    );
  }
}

export default App;
