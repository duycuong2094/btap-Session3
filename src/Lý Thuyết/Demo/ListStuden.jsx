import React, { Component } from 'react';
import Studen from './Studen';

class ListStuden extends Component {
    render() {
        const{studens}=this.props;

        return (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studens.map((e,i)=>(
                            <tr key={i}>
                                <Studen student={e} index={i}/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListStuden;