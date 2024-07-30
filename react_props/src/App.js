import React from 'react';
import './App.css';
import Classprops from './Classprops';
import Functionprops from './Functionprops';

class App extends React.Component{
  render() {
    return (
    <div>
      <Classprops name="Learner 1" place="PlaceX">
        <p>Child Component</p>
      </Classprops>
      
      <Classprops name="Learner 2" place="PlaceY">
        <button>Click</button>
      </Classprops>
      
      <Classprops name="Learner 3" place="PlaceZ" />

      <Functionprops name="Learner 4" place="PlaceA" />{""}
    </div>
    );
  }
}

export default App;
