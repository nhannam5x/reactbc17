import React, { Component } from 'react'

export default class RenderWithMap extends Component {
  
    productList=[
        {id:1,name:'Black car',price: 1000, img: './img/products/black-car.jpg'},
        {id:2,name:'red car',price: 2000, img: './img/products/red-car.jpg'},
        {id:3,name:'Silver car',price: 3000, img: './img/products/silver-car.jpg'},
        {id:4,name:'Steel car',price: 4000, img: './img/products/steel-car.jpg'},
    ]
    renderProduct = () =>{
        // let result = [];
        // for(let index = 0; index < this.productList.length; index++) {
        //     let product = this.productList[index];
        //     let trProduct = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} alt='...' width={50}/></td>
        //     </tr>

        //     result.push(trProduct)
        // }
        // return result;
        
        let result = this.productList.map((product,index) =>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} alt='...' width={50}/></td>
            </tr>
        })

        return result;
    }

    renderDivBootStrap = () =>{
        //output [<div></div>]
        return this.productList.map((product, index)=>{
            return <div className='col-3' key={index}>
            <div className='card'>
                <img src={product.img} alt="" />
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button className='btn btn-success'>View detail</button>
                </div>
            </div>
        </div>
        });
        
    }

    render() {


    return (
      <div className='container'>
          <h3>Product list</h3>
          <table className='table'>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>price</th>
                      <th>img</th>
                  </tr>
              </thead>
              <tbody>
                  {/* [<tr></tr>,<tr></tr>] */}
                  {this.renderProduct()}
              </tbody>
          </table>
          <h3>Product render column</h3>
          <div className='row'>
              {this.renderDivBootStrap()}
          </div>
      </div>
    )
  }
}

