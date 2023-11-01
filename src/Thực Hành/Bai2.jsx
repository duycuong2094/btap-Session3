import React, { Component } from 'react';

class Bai2 extends Component {
    constructor(){
        super();
        this.state={
            valueInp:"",
        }
        this.handleChangeInp=(e)=>{
            this.setState({
                valueInp:e.target.value,
            })
        }
        this.handlChangeSubmit=(e)=>{
            e.preventDefault();
            alert("Bạn vừa nhập là " + this.state.valueInp);
            
        }
    }
    render() {
        const{valueInp}=this.state;
        return (
            <div>
                <form action="" onSubmit={this.handlChangeSubmit}>
                    <input value={valueInp} type="text" name="" id="" onChange={this.handleChangeInp} />
                    <button type='submit'> Submit</button>
                </form>
            </div>
        );
    }
}

export default Bai2;