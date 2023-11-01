import React, { Component } from "react";
import Song from "./Song";
import Sort from "./Sort";

class InputSong extends Component {
  constructor() {
    super();
    this.state = {
      song: "",
      arrSong: [],
    };
    this.handleChangInp = (e) => {
      this.setState({
        song: e.target.value
      });
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        arrSong: [...this.state.arrSong, this.state.song],
        song:""
      });
    };
  }
  dele = (e) => {
    let arr = [...this.state.arrSong];
    arr.splice(e, 1);
    this.setState({
      arrSong: arr
    });
  }
  handleSort=(value)=>{
    console.log(value);
  }
  render() {
    return (
      <div>
        <Sort sort = {this.handleSort}/>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.song}
            name=""
            id=""
            onChange={this.handleChangInp}
          />
          <button type="submit">Thêm</button>
        </form>
        <Song dele={this.dele} arrSong={this.state.arrSong}/>
      </div>
    );
  }
}

export default InputSong;
