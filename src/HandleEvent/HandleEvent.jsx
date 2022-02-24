import React, { Component } from 'react'

export default class HandleEvent extends Component {
  
  
  
    handleClick = () =>{
        alert('Xin chào các bạn');
    }

    showMess = name =>{
        alert('xin chào!' + name);
    }
    render() {
    return (
      <div className='container'>
          <h3>Handle event</h3>
            <button onClick={this.handleClick}>Show message</button>

        <button onClick={() =>{alert('Xin chào các bạn');}}>Click me!</button>
        <hr />
        <h3>Handle event Param</h3>
        <button onClick={this.showMess.bind(this,'Dũng')}>Show Mess</button>
        <button onClick={() => {
            this.showMess('Nhân đẹp ngầu');
        }}>Show mess param</button>
      </div>
    )
  }
}

