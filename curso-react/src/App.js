import React , { Component } from 'react';
import BitCoinPriceContainer from './sections/container-component/index.js'

class App extends Component{

  render (){
    return(
      <div className="App">
        <BitCoinPriceContainer/>
      </div>
    )
  }
}

export default App;
