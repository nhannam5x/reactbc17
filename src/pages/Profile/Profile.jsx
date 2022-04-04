import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Profile extends Component {
//Nếu người dùng đăng nhập thì thông tin được lưu ở localstorage
  render() {
    if(!localStorage.getItem('USER_LOGIN')){
      alert('Bạn chưa đăng nhập nên không thể vào trang này vui lòng đăng nhập !');
      return<Redirect to='/login' />
    }
    return (
      <div>Profile</div>
    )
  }
}
