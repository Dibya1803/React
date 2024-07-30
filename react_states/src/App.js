import React from "react";
import NewComp from "./Components/NewComp";
import "./App.css"


class App extends React.Component{

  styles={
    fontStyle: "bold",
    color: "teal"
  };

  render(){
    return( 
    <div className="App" >
      <h1 style={this.styles}> Hello!! This is about React States... </h1>
      <NewComp />
      </div>
    );
  }
}


export default App;
