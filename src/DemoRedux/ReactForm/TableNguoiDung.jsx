import React, { Component } from "react";
import {connect} from 'react-redux';

class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table" width={100}>
        <thead className="bg-dark text-white font-weight-bold">
          <th>Tài khoản</th>
          <th>Mật Khẩu</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Loại người dùng</th>
          <th></th>
        </thead>
        <tbody>
          {this.props.mangNguoiDung.map((nguoiDung,index)=>(
             <tr key={index}>
            <td>{nguoiDung.taiKhoan}</td>
            <td>{nguoiDung.matKhau}</td>
            <td>{nguoiDung.hoTen}</td>
            <td>{nguoiDung.email}</td>
            <td>{nguoiDung.soDienThoai}</td>
            <td>{nguoiDung.maLoaiNguoiDung}</td>
            <td>
                <button className="btn btn-danger" onClick={()=>{
                  const action = {
                    type:'XOA_NGUOI_DUNG',
                    taiKhoan: nguoiDung.taiKhoan
                  };
                  this.props.dispatch(action);
                }}>Xóa</button>
                <button className="btn btn-info" onClick={() =>{
                  const action = {
                    type:'SUA_NGUOI_DUNG',
                    nguoiDung:nguoiDung
                  }
                  //Sau khi bấm nút sửa tạo ra action và đưa lên redux để thay đổi giá trị state.nguoiDungSua
                  this.props.dispatch(action);
                }
                }>Sửa</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

//return { + return = (;
const mapStateToProps = (rootReducer) => ({
  
    mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung

})

// const mapDispatchToProps = (dispatch) => ({
//   xoaNguoiDung: (taiKhoanXoa) =>{
   
//       const action = {
//         type: 'XOA_NGUOI_DUNG',
//         taiKhoanXoa
//       }
//     dispatch(action);
//     }
//   }
// )

export default connect(mapStateToProps)(TableNguoiDung);
