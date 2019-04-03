import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
		persons: [
      {id: 'asfda1', name: 'Max', age: 28},
		  {id: 'vsfda2', name: 'Manu', age: 29},
		  {id: 'tsfda3', name: 'Stephanie', age: 26}
    ],
    otherState: 'some value',
    showPersons: false
	}

	deletePersonHandler = (personIndex) => {
    {/* Only getting a reference to the array/object which is actually manipulates state which you don't want to do */}
    {/* Getting a copy of the array with all the other elements spread into the new array without mutating state */}
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

 nameChangeHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

   this.setState({ persons: persons })
 }

 togglePersonsHandler = (event) => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
 }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* index is getting the index of the persons array */}
           {this.state.persons.map((person, index) => {
             return <Person
               click={() => this.deletePersonHandler(index)}
               name={person.name}
               age={person.age}
               key={person.id}
               changed={(event) => this.nameChangeHandler(event, person.id)}
              />
           })}
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Me
            </button>
            {persons}
         </header>
      </div>
    );
  }
}
export default App;
