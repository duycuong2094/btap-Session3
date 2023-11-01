import React, { Component } from 'react';

class Seach extends Component {
constructor(){
    super();
    this.state={
        seach:"",
    }
}
handleChangeInp=(e)=>{
    this.setState({
        seach:e.target.value
    })
}
// handleSeach=()=>{

// }
    render() {
        return (
            <div>
                <input type="text" name="" id="" onChange={this.handleChangeInp} value={this.state.seach} />
                <button onClick={()=>this.props.seach(this.state.seach)}>Tìm kiếm</button>
            </div>
        );
    }
}

export default Seach;