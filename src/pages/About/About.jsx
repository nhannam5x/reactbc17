import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class About extends Component {
  
  render() {
    console.log('about');
    return (
      <div className='container'>
        <h3>About</h3>
        <NavLink exact to='/detail/1'>Detail</NavLink>
      </div>
    )
  }
}
