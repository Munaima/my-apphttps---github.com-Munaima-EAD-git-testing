import React from "react";
 const HOC = (originalComponent) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count : 0
            }
        }
        
        Increment = () => {
            this.setState( prevstate => {
                return{ count : prevstate.count +1 }
            })
        }
        render(){
            return <originalComponent count={this.state.count} Increment = {this.Increment}></originalComponent>
        }
    }
    return {NewComponent}
}

export default HOC