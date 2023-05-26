import React, {useState} from 'react'

function HookCounter() {
    const initialval = 0
    const [count ,setCount] = useState(0)

    const IncrementbyFive=()=>{
        for(let i=0; i<5 ; i++){
            setCount(prevcount => prevcount + 1 )
        }
    }

  return (
    <div>
        count: {count}
      <button onClick={()=> {setCount(count + 1)}}>Increment  </button>
      <button onClick={()=> {setCount(initialval)}}>Reset </button>

      <button onClick={()=> {setCount(count - 1)}}>decrement </button>
      <button onClick={IncrementbyFive}>Increment 5 </button>



    </div>
  )
}

export default HookCounter
