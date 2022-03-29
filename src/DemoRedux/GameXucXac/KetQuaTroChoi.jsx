import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KetQuaTroChoi extends Component {
  render() {
      let {soBanThang,tongSoBanChoi,banChon} = this.props;
    return (
      <div className='text-center container'>
          <div className='display-4'>
              Bạn chọn: <span className='text-danger'>{banChon ? 'Tài':'Xỉu'}</span>
          </div>
          <div className='display-4'>
              Tổng số bàn thắng: <span className='text-success'>{soBanThang}</span>
          </div>
          <div className='display-4'>
              Tổng số bàn chơi: <span className='text-danger'>{tongSoBanChoi}</span>
          </div>
          <div> 
              <button className='btn btn-success p-5' style={{fontSize:25}} onClick={()=>{
                  const action = {
                      type: 'PLAY_GAME',

                  }
                  return this.props.dispatch(action);
              }}>Play game</button>

          </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
    let {banChon,soBanThang,tongSoBanChoi} = rootReducer.gameXucXacReducer;

    return{
        banChon: rootReducer.gameXucXacReducer.banChon,
        soBanThang: rootReducer.gameXucXacReducer.soBanThang,tongSoBanChoi
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)