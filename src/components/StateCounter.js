import React, { Component } from "react";

class StateCounter extends Component{
    constructor(){
        super()
        this.state = {
            counter : 0

        }

    }

    Increment(){
        // this.setState({
        //     counter : this.state.counter + 1
        // }, console.log(this.state.counter))


        //Below code is applicable only for increment by five

        this.setState((prevstate) =>({
                counter : prevstate.counter + 1
        })
        
        )

        




    }

    IncrementbyFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render(){
        return(
            <div>
                <h1> counter - {this.state.counter}</h1>
                <button onClick={() => {this.IncrementbyFive()}}>Increment</button>
            </div>
        )
    }
}

export default StateCounter