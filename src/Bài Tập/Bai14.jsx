import React, { Component } from 'react';

class Bai14 extends Component {
    constructor(){
        super();
        this.state={
            text:""
        }
        this.thethao=()=>{
            this.setState({
                text:"Thể thao"
            })
        }
        this.vanhoa=()=>{
            this.setState({
                text:"Văn hóa"
            })
        }
        this.khoahoc=()=>{
            this.setState({
                text:"Khoa Học"
            })
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.text}</div>
                <button onClick={this.thethao}>Thể Thao</button>
                <button onClick={this.vanhoa}>Văn Hóa</button>
                <button onClick={this.khoahoc}>Khoa Học</button>    
            </div>
        );
    }
}

export default Bai14;