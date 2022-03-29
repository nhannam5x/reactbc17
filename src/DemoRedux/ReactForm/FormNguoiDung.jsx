import React, { Component } from "react";
import { connect } from 'react-redux';

class FormNguoiDung extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "NguoiDung",
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
    //Nếu hợp lệ gửi dữ liệu đi => lên redux
    const action= {
      type: 'THEM_NGUOI_DUNG',
      nguoiDung: this.state.values
    }
    //Đưa dữ liệu lên redux
    this.props.dispatch(action);
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
  //Can thiệp vào lifecycle khi props hoặc state  thay đổi thành hàm này sẽ thực thi trước khi render
  // static getDerivedStateFromProps(newProps, state){
  //   //Chỉ khi nào ng dùng bấm nút sửa thì mới xử lý này
  //   if(state.values.taiKhoan !== newProps.nguoiDungSua.taiKhoan){
  //   console.log('newProps',newProps);
  //   console.log('state',state);
  //   //Lấy dữ liệu rừ newprops gán vào state => sau khi render dữ liệu binding từ state
  //   state.values = {...newProps.nguoiDungSua};
  // }
  //   return state;
  // }

  //Chỉ chạy khi props thay đổi 
  componentWillReceiveProps(newProps){
    this.setState({values:newProps.nguoiDungSua})
  }

  render() {
    let {taiKhoan,hoTen,matKhau,email,soDienThoai,maLoaiNguoiDung} = this.state.values;
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
                    value = {taiKhoan}
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
                    value = {matKhau}
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
                    value = {email}
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
                    value = {hoTen}
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
                    value = {soDienThoai}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>

                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    value={maLoaiNguoiDung}
                    className="form-control"
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                    onChange={this.handleChangeInput}
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
            <button type='button' className="btn btn-info ml-2" onClick={()=>{
              //Gửi dữ liệu về redux thay đổi mảng người dùng
              const action = {
                type: "CAP_NHAT_THONG_TIN",
                nguoiDung: this.state.values
              }
              //Đưa dữ liệu lên redux
              this.props.dispatch(action)
            }}
            >
              
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (rootReducer) => {
  return{
    nguoiDungSua: rootReducer.quanLyNguoiDungReducer.nguoiDungSua
  }
}
export default connect(mapStateToProps)(FormNguoiDung);