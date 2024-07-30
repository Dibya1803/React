import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';


export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "ReactJs"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "ReactJs"
            });
        }, 3000);
    }


  render() {
    console.log("Parent Component render");
    return (
      <div>I'm the Parent 
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp;