import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from'./HOC/NewComponent'
import WrapComponent from './HOC/WrapComponent'

const HOC = NewComponent(WrapComponent)
class App extends Component {
  render() {
    return (
      <div className="App">
        <HOC/>
      </div>
    );
  }
}

export default App;
