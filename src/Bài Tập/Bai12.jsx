import React, { Component } from "react";

class Bai12 extends Component {
  constructor() {
    super();
    this.state = {
      img: [
        "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
        "https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg",
        "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/13034625/image-danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi-164709278437272.jpg",
        "https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/201706/original/images1920558_4053279_16.jpg",
        "https://vcdn1-dulich.vnecdn.net/2022/07/04/11-5977-1656858349-1656932044-3356-1656932377.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=wlMP_C-PBfELkksQF0D3kQ",
      ],
      index:0
    };
    this.handleChangNext=()=>{
        this.setState({
            index:this.state.index+1
        })
       
    }
    this.handleChangBack=()=>{
        this.setState({
            index:this.state.index-1
        })
    }
  }
  render() {
    return <div>
        <div className="slideImg">
        <img src={this.state.img[this.state.index]} alt="" />
        </div>
        
        <button onClick={this.handleChangNext}>Next</button>
        <button onClick={this.handleChangBack}>Back</button>
    </div>;
  }
}

export default Bai12;
