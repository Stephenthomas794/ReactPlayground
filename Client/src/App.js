import './App.css';
import React, {Component} from 'react';

import Person from './Person/Person';

class App extends Component{
state = {
    person:[
        {name: 'Alex', age: 28},
        {name: 'Jeff', age: 29},
        {name: 'Jacon', age: 30}
    ]
}

switchNameHandler = (newName) => {
    console.log("Its Working");
    this.setState({
    person: [
        {name: 'Jacon', age: 30},
        {name: newName, age: 30},
        {name: 'Jacon', age: 30}
    ]
    })
}

nameChangedHandler = (event) => {
    this.setState({
        person: [
            {name: 'Max', age: 28},
            {name: event.target.value, age:29},
            {name: 'stephanie', age:26}
        ]
    })
}
render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
        };

  return (
    <div className="App">
        <button 
            style= {style}
            onClick={this.switchNameHandler.bind(this, 'Kach')}> Switch Name</button>
        <h> HEllo World </h>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/> 
        <Person name={this.state.person[1].name} 
                age={this.state.person[1].age} 
                click={this.switchNameHandler.bind(this, 'Stephen')}
                changed={this.nameChangedHandler}> HEELOW WORLDDD </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
    </div>
  );
}
}
export default App;
