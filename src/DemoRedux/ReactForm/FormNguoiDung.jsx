import React, { Component } from "react";

export default class FormNguoiDung extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "Nguoi Dung",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // alert('submitted');
    // let taiKhoan = document.querySelector("#taiKhoan").value;
    // console.log('taiKhoan',taiKhoan);
    console.log("values", this.state.values);
    //Kiểm tra dữ liệu có bị lỗi hay không trước khi submit
    let valid = true;
    //Lấy ra this.state.errors kiểm tra
    let { errors, values } = this.state;
    for (let key in errors) {
      //Nếu như có một trường error nào không hợp lệ
      if (errors[key] !== "") {
        valid = false;
      }
    }
    for (let key in values) {
      //Nếu có 1 trường values nào bằng rỗng => không hợp lệ
      if (values[key] === "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Dữ liệu nhập không hợp lệ");
      return;
    }
  };

  handleChangeInput = (e) => {
    let { value, id, name } = e.target; //value: khai123 id="taiKhoan" name="taiKhoan"
    let typeMeta = e.target.getAttribute("typeMeta"); //attribute là thuộc tính mở rộng của thẻ

    console.log("typeMeta", typeMeta);

    let newValues = { ...this.state.values };
    newValues[id] = value;

    let newErrors = { ...this.state.errors };
    let messageError = "";
    if (value === "") {
      messageError = id + " không được bỏ trống";
    }
    if (typeMeta === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        messageError = id + " không đúng định dạng !";
      }
    }
    newErrors[id] = messageError;
    //setState
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white font-weight-bold">
            Form đăng ký
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>

                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>

                <div className="form-group">
                  <p>Email</p>
                  <input
                    typeMeta="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>

                <div className="form-group">
                  <p>Số Điện thoại</p>
                  <input
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>

                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    className="form-control"
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                  >
                    <option>Quan Tri</option>
                    <option>Nguoi Dung</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-success">
              Đăng ký
            </button>
            <button type="submit" className="btn btn-info ml-2">
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}
