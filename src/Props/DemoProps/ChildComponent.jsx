import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
      /*
            this.props là thuộc tính có sẵn của react class component dùng để truyền dữ liệu từ component cha sang component con 
            this.props là thuộc tính readonly: không thể gán lại được giá trị
      */
    //  this.props.tenSanPham = 'abc';
    let {hinhAnh, tenSanPham, gia, maSanPham} = this.props.product;
    return (
      <div className='card'>
          <img src={this.props.product.hinhAnh} alt="..." />
          <div className='card-body'>
              <p>Tên sản phẩm: {tenSanPham}</p>
              <p>Giá {gia}</p>
          </div>
      </div>
    )
  }
}
