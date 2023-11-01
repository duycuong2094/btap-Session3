import React, { Component } from 'react';

class Studen extends Component {
    render() {
        let data = this.props.student;
        let index=this.props.index
        return (
            <>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.id}</td>
            </>
        );
    }
}

export default Studen;