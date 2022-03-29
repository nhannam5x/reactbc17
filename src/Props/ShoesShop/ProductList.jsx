import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    renderProduct = () =>{
        let {dataProduct} =this.props;
        return dataProduct.map((item,index)=>{
            return <div className='col-4 mt-2' key={index}>
                <Product product={item}/>
            </div>
        })
    }
  render() {
    // let productA = this.props.dataProduct[0];
    // let productB = this.props.dataProduct[1];
    // let productC = this.props.dataProduct[2];
    return (
      <div className='row'>
          <div className='col-12 text-center'>
              <h3>Product list</h3>
          </div>
          {this.renderProduct()}
          {/* <div className='col-4'>
              <Product />
             
          </div>
          <div className='col-4'>
              <Product />
             
          </div>
          <div className='col-4'>
              <Product />
          </div> */}
      </div>
    )
  }
}
