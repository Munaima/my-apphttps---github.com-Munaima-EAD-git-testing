import React, { Component } from "react";

class Form extends Component{
constructor(){
    super()
    this.state ={
        username : ' ',
        suggest : ' '
    }
}

    Changeusername = (event) => {
            this.setState({
                username : event.target.value
            })
    }
    Changesuggestion = (event) => {
        this.setState ({
                suggest : event.target.value
        })

    }
    submit=(event)=>{
        alert(`${this.state.username} ${this.state.suggest}`)
        event.preventDefault()
    }

    render(){
        return(
        <form>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.Changeusername}></input>
            </div>
            <div>
                <label>Suggest</label>
                <textarea type='text' value={this.state.suggest} onChange={this.Changesuggestion}></textarea>
            </div>
            <button onClick={this.submit}>submit</button>
        </form>
        )
    }
}

export default Form
