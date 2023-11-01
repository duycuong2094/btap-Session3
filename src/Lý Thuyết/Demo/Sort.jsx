import React, { Component } from 'react';

class Sort extends Component {
    constructor(){
        super();
        this.state={
            option:"",
        }
    }
    changeOption=(e)=>{
            this.setState({
                option:e.target.value
            })
    }
    render() {
        this.props.sort(this.state.option)
        return (
            <>
                <select name="" id="" onChange={this.changeOption}>
                    <option value="">Sắp xếp theo</option>
                    <option value="name">Bảng chữ cái</option>
                    <option value="age"> Tuổi tăng dần</option>
                </select>
            </>
        );
    }
}

export default Sort;