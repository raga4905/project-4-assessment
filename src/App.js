import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles'

const circles = [1,2,3,4]

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    }
  }
  
  handleCircleSelection = (num) => {
    this.setState({ selected: num })
    console.log("IT CLICKED", num)
  }
  
  
    // className={{this.current === idx ? 'selected' : ''}}

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          handleCircleSelection={this.handleCircleSelection}
          circles={circles}
          selected={this.state.selected}
          />
          <Circles selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;