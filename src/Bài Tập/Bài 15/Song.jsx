import React, { Component } from 'react';

class Song extends Component {
   

    

    render() {
        return (
            <div>
                <ul>
                    {this.props.arrSong.map((e, index) => (
                        <li key={index}>
                            {e} <span onClick={()=>this.props.dele(index)}>Delete</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Song;
