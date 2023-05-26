import React, { Component } from 'react'
import HOC from './HOC'


 class HoverCounter extends Component {
  
  render() {
    const {count , Increment} = this.props
    return (
      <div>
        <h1 onMouseOver={Increment}> Hover {count} times</h1>
      </div>
    )
  }
}

export default HOC(HoverCounter)
