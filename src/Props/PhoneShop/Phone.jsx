import React, { Component } from "react";

export default class Phone extends Component {
  render() {
      let {product} = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} alt="..." />
        <div className="card-box">
            <p>{product.tenSP}</p>
            <button className="bg-success text-white">Xem chi tiết</button>
        </div>
      </div>
    );
  }
}
