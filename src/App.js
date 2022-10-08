import React, { Component } from 'react'
import BetterNumberList from './BetterNumberList';
import NumberList from './NumberList'

class App extends Component {
  render() { 
    return (
      <div className=''>
      <NumberList/>
      <BetterNumberList/>
      </div>
    );
  }
}
 
export default App;