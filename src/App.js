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

	handleNameSwitch = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: NEVER MUTATE STATE!!! this.state.persons[0].name = 'Maximillian'
    this.setState({
      persons: [
      {name: 'newName', age: 28},
		  {name: 'Manu', age: 29},
		  {name: 'Stephanie', age: 27}
     ]
   })
 }

 nameChangeHandler = (event) => {
   this.setState({
    persons: [
      {name: 'newName', age: 28},
		  {name: event.target.value, age: 29},
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
			      <button onClick={this.handleNameSwitch.bind(this, 'Maximillian')}>Switch Me</button>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.handleNameSwitch}
              />
			        <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.handleNameSwitch.bind(this, 'Max')}
                changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
			        <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
         </header>
      </div>
    );
  }
}
export default App;
