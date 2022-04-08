import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='container'>
          About detail: {this.props.match.params.id}
      </div>
    )
  }
}
