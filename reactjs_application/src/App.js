import React, { Component } from "react";
import { Button } from 'reactstrap'; // or 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is bootstrap Components</h1>
        <Button color="primary">primary</Button>
      </div>
    );
  }
}

export default App;
