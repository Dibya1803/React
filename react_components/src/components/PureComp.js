import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
  render() {
        console.log("Pure Component render");
    return (
      <div>I'm Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp;