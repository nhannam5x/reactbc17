import React, { Component } from 'react'
import Product from '../ShoesShop/Product';
import Phone from './Phone'

export default class PhoneList extends Component {
  renderPhoneList = () =>{
      let {dataProduct} = this.props;
      return dataProduct.map((item,index) =>{
        return <div className='col-4'>
                <Phone product={item}/>
            </div>
      })

  }
  
    render() {
    return (
    <div className='container'>
        <div className='row'>
            {this.renderPhoneList()}
            {/* <Phone /> */}
        </div>
    </div>
    )
  }
}
