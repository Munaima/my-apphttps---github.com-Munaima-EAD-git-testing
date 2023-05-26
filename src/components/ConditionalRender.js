import React, { Component } from 'react'

 class ConditionalRender extends Component {
    constructor(){
        super()
        this.state={
            loggedin :true
        }
    }
    //If-else
//   render() {
//     if(this.state.loggedin){
//         return (
//             <div>Welcom munaima</div>
//         )
//     }
//     else{
//         return(
//             <div>
//                 Welcome guest
//             </div>
//         )
//     }
   
//   }

    //Variable
    render(){
        let message
        if(this.state.loggedin){
            message = <div>Welcome munaima</div>

        }
        else{
            message = <div>Welcom guest</div>
        }
        return(
                <div>
                    {message}
                </div>
        )
    }
}

export default ConditionalRender
