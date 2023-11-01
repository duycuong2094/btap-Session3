import React, { Component } from 'react';

class Bai3 extends Component {
    constructor(){
        super();
        this.state={
            number:"",
            arr:[],
            total:0
        }

        this.handleChangleInp=(e)=>{
            this.setState({
                number:e.target.value,
            })
        }
        this.handleChangeSubmit=(e)=>{
            e.preventDefault();
            this.setState({
                arr:[...this.state.arr,this.state.number],
                total:this.state.total + parseInt(this.state.number),
                number:""
            })
        }
        console.log(this.state.arr);
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleChangeSubmit}>
                    <input type="number" value={this.state.number} onChange={this.handleChangleInp} name="" id="" />
                    <button type='submit'>Add</button>
                </form>
                <div>Tổng là : {this.state.arr.join(" + ") +"=" + this.state.total}</div>
            </div>
        );
    }
}

export default Bai3;