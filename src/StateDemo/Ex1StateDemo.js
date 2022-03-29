import React, { Component } from "react";
import BaiTapChonXe from "./BaiTapChonXe";

export default class Ex1StateDemo extends Component {
  state = {
    fontSize: 17,
    homeColor: 'pink'
  };

  render() {
    return (
      <div className="container">
          <h3>Tăng giảm phông chữ</h3>

        <p
          style={{ fontSize: this.state.fontSize + "px" }}
          className="p-2 bg-dark text-white"
        >
          Nội dung văn bản
        </p>
        <button className="btn btn-outline-primary" onClick={()=>{
            let newFontSize = this.state.fontSize + 5;
            this.setState({
                fontSize:newFontSize
            })
        }}>+</button>
        <button className="btn btn-outline-primary" onClick={()=>{
            let newFontSize = this.state.fontSize - 5;
            this.setState({
                fontSize:newFontSize
            })
        }}>-</button>
        <hr />
        <h3>Bài tập 2: Thay đổi màu sắc</h3>
        <h3 className='fa fa-home' style={{fontSize:'100px',color:this.state.homeColor}}></h3>
        <br />
        <button className='btn btn-danger' onClick={()=>{
            this.setState({
                homeColor:'red'
            })
        }}>Red</button>
        <button className='btn btn-info' onClick={()=>{
            this.setState({
                homeColor:'blue'
            })
        }}>Blue</button>
        <button className='btn btn-success'onClick={()=>{
            this.setState({
                homeColor:'green'
            })
        }}>Green</button>
        <hr />
        <h3>Bài tập 3: Chọn màu xe</h3>
        <BaiTapChonXe />
      </div>
    );
  }
}
