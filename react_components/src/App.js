import React, { Component } from 'react';
import './App.css';
import { ClassComp, ClassComp1 } from './components/ClassComp';
import Click from './components/Click';
import Counter from './components/Counter';
import FunctionalComp from './components/FunctionalComp';
import ParentComp from './components/ParentComp';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello!! welcome to react js</h1>
        <FunctionalComp />
        <ClassComp />
        <ClassComp1 />
        <Click />
        <br/>
        <Counter />
        <ParentComp />
      </div>
    );
  }
}

export default App;
