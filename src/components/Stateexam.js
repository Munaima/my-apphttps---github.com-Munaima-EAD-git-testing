import React, { Component } from "react";

class Stateexam extends Component{
    constructor(){
        super()
         this.state ={
                message : 'Heellllo mahfooz '
         }
        

        
    }

    Changemessage(){
        this.setState({
            message : 'Thankyou munaima'
        })
    }

    render(){
        return(
            <div>
                    <h1>{this.state.message}</h1>
                    <button onClick={() => this.Changemessage()}>Subscribe</button>
            </div>
    
        )
    }

}

export default Stateexam