import React, { Component } from 'react'
import HOC from './HOC'

 class ClickCounter extends Component {
    
  render() {
    const {count , Increment} = this.props
    return (
      <div>
        <button onClick={Increment}>
        Click {count} times </button>
      </div>
    )
  }
}

export default HOC(ClickCounter)
