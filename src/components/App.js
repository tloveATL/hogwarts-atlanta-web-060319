import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      hogs: hogs,
      filtered: false
    }
  }
  
  filterHogs = (e) => {
    return this.state.hogs.filter(h => h.greased)
}

  greasedPigs = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  }

  render() {
    return (
      <div className="App">
          <Nav filterPigs={this.greasedPigs}/> 
          {this.state.filtered ? <HogContainer hogs={this.filterHogs()}/> : <HogContainer hogs={this.state.hogs}/>}
      </div>
    )
  }
}

export default App;
