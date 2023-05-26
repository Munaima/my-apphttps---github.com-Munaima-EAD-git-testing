import React, { Component } from 'react'
import { UserConsumer } from './UserContextAPI'

 class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (username)=>{
                        return <div>Helllllo {username}</div>
                }
            }
        </UserConsumer>
    )
      
    
  }
}

export default ComponentF
