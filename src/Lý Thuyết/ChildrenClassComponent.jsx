import React, { Component } from 'react';

class ChildrenClassComponent extends Component {
    constructor(){
        super()
        this.state={
            sudent:[],
            cout:0,
        }
    }
        handle=()=>{
        this.setState({
            cout:this.state.cout+1,
        })
    }
    render() {
        return (
            <div>
                <h1>Children Component</h1>
                <div>{this.props.name}</div>
                <div>Gía trị biến đếm là : {this.state.cout}</div>
                <button onClick={this.handle}>Up</button>
            </div>
        );
    }
}

export default ChildrenClassComponent;