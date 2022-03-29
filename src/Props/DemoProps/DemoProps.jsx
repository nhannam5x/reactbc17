import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class DemoProps extends Component {
  render() {
      let productA = {
          maSanPham:1,
          tenSanPham:'Iphone',
          gia:1000,
          hinhAnh: 'https://picsum.photos/id/1/200/300'
      }

      let productB = {
        maSanPham:2,
        tenSanPham:'Iphone X',
        gia:2000,
        hinhAnh: 'https://picsum.photos/id/3/400/500'
    }
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-4'>
                  <ChildComponent product={productA}/>
              </div>
              <div className='col-4'>
                  <ChildComponent product={productB}/>
              </div>
          </div>
      </div>
    )
  }
}
