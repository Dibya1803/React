import React, { Component } from 'react';
import bellA from "./BellA.png";
import bellB from "./BellB.png";


class NewComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Welcome, to this topic",
       sub: "Enter",
       imageURL: bellA
    };
  }
  styles={
    fontStyle: "italic",
    color: "purple"
  };
  Buttonchange = () => {
    this.setState({
        message: "So, Now Start learning about ReactStates!!!",
        sub: "Enter"
    });
  };
  imageChange = () => {
    this.setState({
        imageURL: bellB,
        message: "Thank You! Happy learning"

    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>
            <img 
                style={{width:"30px", height:"30px"}} 
                src={this.state.imageURL}
                onClick={this.imageChange} 
                alt="" 
            />
      </div>
    )
  }
}

export default NewComp