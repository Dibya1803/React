import React, { Component } from 'react';

class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name} !! this is about React props... and from {this.props.place}. </h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Classprops;