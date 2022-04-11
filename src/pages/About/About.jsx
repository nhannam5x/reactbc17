import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export default class About extends Component {
  
  doRedirect(red) {
    if(red=1)
    {return (<Redirect to='/detail/:id'/>)}
    else if(red=2)
    {return (<Redirect to='/contact'/>)}
    else alert('stay');
  }
  render() {
    return (
      <div className='container'>
        <h3>About</h3>
        <button onClick={this.doRedirect(1)}>Detail</button>
        <button onClick={this.doRedirect(2)}>Contact</button>
      </div>
    )
  }
}
