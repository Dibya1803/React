import React, { Component } from 'react';

export class RegularComp extends Component {
  render() {
    console.log("Regular Component render");
    return (
      <div>I'm Regular Component {this.props.name}</div>
    )
  }
}

export default RegularComp;