import React, { Component } from 'react'
export default class Detail extends Component {
  render() {
    console.log('Detail');
      // this.props.match.params: dùng để lấy giá trị tham số trên thanh url
    return (
      <div className='container'>
        <h1>Detail Page</h1>
          Detail page: {this.props.match.params.id}
      </div>
    )
  }
}
