import React, { Component } from 'react'
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {
 


  handleGoHome = () => {
    this.props.history.push('/home');
  }



  state = {
    toGo: true,
  }
  render() {
    return (
      <div className='container'>
        <h3>Contact</h3>
        <button className='btn btn-success' onClick={this.handleGoHome}>Đăng nhập</button>
        <Prompt 
        when = {this.state.toGo}
        message = {location => 'Bạn có muốn rời khỏi đây?'}/>
      </div>
    )
  }
}
