import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    isSaveForm: true
  }
  render() {
    return (
      <div className="container">
        <h3 className="">Đăng ký</h3>
        <form className="row" onSubmit={(e)=>{
          e.preventDefault();
          this.setState({
            isSaveForm:false
          })
        }}>
          <div className="col-6">
            <div className="form-group">
              <p>Tài Khoản</p>
              <input
                id="taiKhoan"
                name="taiKhoan"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                id="matKhau"
                type="password"
                name="matKhau"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                id="email"
                name="email"
                className="form-control"
              ></input>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                id="soDienThoai"
                name="soDienThoai"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <p>Họ tên</p>
              <input
                id="hoTen"
                name="hoTen"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
            
            
            </div>
          </div>
          <div className="col-12 mt-5">
            <button className="btn btn-success">Đăng ký</button>
          </div>
        </form>
        <div>
              <span style={{color:'blue',cursor:'pointer',fontSize:18}} onClick={()=>{this.props.history.goBack()}}>Trở về</span>
          </div>
        <Prompt 
          when={this.state.isSaveForm}
          message={(location)=>{
            return "Bạn thực sự muốn rời khỏi trang!";
          }}
        />
      </div>
    );
  }
}
