import React, { Component } from 'react';
import './App.css';
import Name from './Name'
import NameController from './NameController'
import ColorController from './ColorController'
import BackColorController from './BackColorController'

class App extends Component {
  state = {name: 'Nima'}
  render() {
    return (
      <div className="App">
        <hr />
        <Name />
        <hr />
        <h2>Name</h2>
        <NameController />
        <hr />
        <h2>Font Color</h2>
        <ColorController />
        <hr />
        <h2>Background Color</h2>
        <BackColorController />
        <hr />
      </div>
    );
  }
}

export default App;
