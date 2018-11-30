import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from'./HOC/NewComponent'
import WrapComponent from './HOC/WrapComponent'
import ContextComponent from './ContextComponent/index'

const HOC = NewComponent(WrapComponent)
class App extends Component {
  render() {
    return (
      <div className="App">
        <HOC/>
        <ContextComponent/>
      </div>
    );
  }
}

export default App;
