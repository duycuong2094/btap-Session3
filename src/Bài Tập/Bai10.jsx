import React, { Component } from 'react';

class Bai10 extends Component {
    constructor(){
        super();
        this.state={
            text:"Đoạn văn bản chưa được thay đổi",
            color:"black",
        }
        this.handlChange=()=>{
            this.setState({
                text:"Đoạn văn bản đã được thay đổi",
                color:"red",
            })
        }
    }
    render() {
        return (
            <div>
                    <div style={{color:this.state.color}}>{this.state.text}</div>
                    <button onClick={this.handlChange}>Thay đổi </button>
            </div>
        );
    }
}

export default Bai10;