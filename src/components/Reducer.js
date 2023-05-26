import React from 'react'
import { useReducer } from 'react'

const initialstate = 0

const reducer = ( state , action ) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset' :
            return initialstate
        default:
            return state
    }

}
function Reducer() {
    const [ count , Dispatch]=useReducer(reducer , initialstate)

    
  return (
    <div>
        <h3>count {count}</h3>
      <button onClick={()=>Dispatch('increment')}>Increment</button>
      <button onClick={()=>Dispatch('decrement')}>Decrement</button>
      <button onClick={()=>Dispatch('reset')}> Reset</button>

    </div>
  )
}

export default Reducer
