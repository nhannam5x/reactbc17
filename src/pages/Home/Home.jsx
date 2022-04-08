import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='text-center'>
        <h3>WELCOME HOME</h3>
        {/* Mỗi lần bấm về thẻ Home thì tự động chuyển hướng đến trang about */}
        <div>Go to About <Redirect to='/about'/></div>
      </div>
    )
  }
}
