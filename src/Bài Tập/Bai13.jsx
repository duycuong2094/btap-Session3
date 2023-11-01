import React, { Component } from 'react';

class Bai13 extends Component {
    constructor(){
        super();
        this.state={
            status : true
        }
        this.handleChagle=()=>{
            this.setState({
                status:!this.state.status
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.status?<div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi vero atque officia perspiciatis voluptatum libero, error quod amet saepe distinctio! Vero quaerat ad excepturi error inventore perferendis quibusdam a.</p>
                </div>:<div></div>}
                <button onClick={this.handleChagle}>{this.state.status?<div>Ân</div>:<div>Hiện</div>}</button>
            </div>
        );
    }
}

export default Bai13;