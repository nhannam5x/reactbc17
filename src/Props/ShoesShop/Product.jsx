import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className='card'>
        <img src={product.image} alt="..." />
        <div className='card-box'>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className='bg-dark'> add to carts <i className='fa fa-cart'></i></button>
        </div>  
      </div>
    )
  }
}
