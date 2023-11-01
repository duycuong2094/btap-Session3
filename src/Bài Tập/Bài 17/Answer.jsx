import React, { Component } from "react";

class Answer extends Component {
  constructor() {
    super();
    this.state = {
      answer: [2, 25, "Không biết", "Không"],
      myAnswer: {
        cau1: "",
        cau2: "",
        cau3: "",
        cau4: "",
      },
      point: 0,
      check1: true,
      check2: true,
      check3: true,
      check4: true,
    };
  }

  answer = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      myAnswer: {
        ...prevState.myAnswer,
        [name]: value,
      },
    }));
  };

  handleSubmitAnswer = (e) => {
    e.preventDefault();
    let newPoint = 0;
    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let flag4 = true;
    if (this.state.myAnswer.cau1 == this.state.answer[0]) {
      newPoint += 10;
      flag1=true
    } else {
      flag1 = false;
    }
    if (this.state.myAnswer.cau2 == this.state.answer[1]) {
      newPoint += 10;
      flag2=true
    } else {
      flag2 = false;
    }
    if (this.state.myAnswer.cau3 == this.state.answer[2]) {
      newPoint += 10;
      flag3=true
    } else {
      flag3 = false;
    }
    if (this.state.myAnswer.cau4 == this.state.answer[3]) {
      newPoint += 10;
      flag4=true    
    } else {
      flag4 = false;
    }
    this.setState({
      point: newPoint,
      check1: flag1,
      check2: flag2,
      check3: flag3,
      check4: flag4,
    });
  };
  render() {
    const { cau1, cau2, cau3, cau4 } = this.state.myAnswer;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmitAnswer}>
          <input
            type="text"
            onChange={this.answer}
            placeholder="Câu 1"
            name="cau1"
            value={cau1}
          />
          <br></br>
          {this.state.check1 ? (
            ""
          ) : (
            <span>Câu trả lời của bạn sai đáp án phải là : 2 </span>
          )}
          <br></br>
          <input
            type="text"
            onChange={this.answer}
            name="cau2"
            placeholder="Câu 2"
            value={cau2}
          />
          <br></br>
          {this.state.check2 ? (
            ""
          ) : (
            <span>Câu trả lời của bạn sai đáp án phải là : 25 </span>
          )}
          <br></br>

          <input
            type="text"
            onChange={this.answer}
            name="cau3"
            placeholder="Câu 3"
            value={cau3}
          />
          <br></br>
          {this.state.check3 ? (
            ""
          ) : (
            <span>Câu trả lời của bạn sai đáp án phải là : Không Biết </span>
          )}
          <br></br>

          <input
            type="text"
            onChange={this.answer}
            name="cau4"
            placeholder="Câu 4"
            value={cau4}
          />
          <br></br>
          {this.state.check4 ? (
            ""
          ) : (
            <span>Câu trả lời của bạn sai đáp án phải là : Không </span>
          )}
          <br></br>

          <button type="submit"> Gửi câu trả lời </button>
        </form>
        <h1> Điểm của bạn là {this.state.point}</h1>
      </div>
    );
  }
}

export default Answer;
