import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {
    constructor(){
        super();
        this.state={
            question:[" 1 + 1 bằng bao nhiêu" , "5 * 5 bằng bao nhiêu " , "1 năm có bao nhiêu giây","Năm nay có phải năm nhuận không"],
        }
    }
   
    render() {
        return (
            <>
                {this.state.question.map((item,index)=>(
                    <div key={index}>{item}</div>
                ))}
                <div>Câu trả lời của bạn là :</div>
                <Answer ansers={this.state.answer}/>
            </>
        );
    }
}

export default Questions;