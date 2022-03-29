import React, { Component } from "react";

export default class TableNguoiDung extends Component {
  render() {
    return (
      <table>
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
          <tr>
            <td>Tài khoản</td>
            <td>Mật Khẩu</td>
            <td>Họ tên</td>
            <td>Email</td>
            <td>Số điện thoại</td>
            <td>Loại người dùng</td>
            <td>
                <button className="btn btn-danger">Xóa</button>
                <button className="btn btn-info">Sửa</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
