import React, { Component } from 'react';

class Bai1 extends Component {
    constructor(){
        super();
        this.state={
            value:0
        }
     this.handlChangeUp = ()=>{
       this.setState({
        value:this.state.value+1
       })
       }
    }
    render() {
        return (
            <div>
                <button onClick={this.handlChangeUp}>Up</button>
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default Bai1;