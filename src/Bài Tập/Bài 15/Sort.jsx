import React, { Component } from 'react';

class Sort extends Component {
    constructor(){
        super();
        this.state={
            value:""
        }
    }
    handleChangeSort=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render() {
        this.props.sort(this.state.value)
        return (
            <>
            <select name="" onChange={this.handleChangeSort} id=""> 
            <option value="">Sắp xếp theo</option>
            <option value="name">Bảng chữ cái</option>
            </select>
            </>
        );
    }
}

export default Sort;