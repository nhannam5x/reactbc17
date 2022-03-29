import React, { Component } from 'react'
import { connect } from 'react-redux'
//Kết nối redux
class XucXac extends Component {

    renderKetQua = () =>{
        let tongDiem = this.props.mangXucXac.reduce((diem,xx,index)=>{
            return diem += xx.diem;
        },0)
        let taiXiu = tongDiem > 11 ? "Tài" : "Xỉu";
        return <p> {tongDiem} - {taiXiu} </p>
    }

  render() {
    return (
      <div>
          <div className='row text-center mt-5'>
              <div className='col-4'>
                  <button style={{background:'none',border:'none'}} onClick={()=>{
                      const action = {
                          type: 'DAT_CUOC',
                          banChon: true
                      };
                      //sử dụng this.props.dispatch để đưa dữ liệu lên reducer(component phải connect với redux mới có props này)
                      this.props.dispatch(action)
                  }}>
                      <div style={{borderRadius:'10px'}} className='bg-danger text-white display-4 p-5'>Tài</div>
                  </button>
              </div>
              <div className='col-4'>
                  {this.props.mangXucXac.map((xucXac,index)=>{
                      return <img key={index} width={50} height={50} src={xucXac.img}/>
                  })}
                  <br/>
                  <div className='display-4 text-warning mt-4'>
                      {this.renderKetQua()}
                  </div>
                  
              </div>

              <div className='col-4'>
                  <button style={{background:'none',border:'none'}}>
                      <div style={{borderRadius:'10px'}} className='bg-info text-white display-4 p-5' onClick={()=>{
                          const action = {
                              type: 'DAT_CUOC',
                              banChon: false
                          }
                          this.props.dispatch(action)
                      }}>Xỉu</div>
                  </button>
              </div>
          </div>
      </div>
    )
  }
}

//Bước 2: định nghĩa mapstatetoprops => lấy dữ liệu redux về
const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac:rootReducer.gameXucXacReducer.mangXucXac,
        
    }
}


export default connect(mapStateToProps)(XucXac)

//rcredux