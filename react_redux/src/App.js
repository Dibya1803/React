import React, { Component } from 'react';
import './App.css';
import NewComp from './NewComp';

class App extends Component {
  styles = {
    fontStyle : 'bold',
    color : 'teal',
  }
  
  render() {
    
    return(
      <div className='App'>
        <h1 style={this.styles}>This is about React Redux</h1> 
        <NewComp />
      </div>
    )
  }
  }

export default App;

