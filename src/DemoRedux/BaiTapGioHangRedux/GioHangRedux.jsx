import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';


class GioHangRedux extends Component {
  render() {
      console.log('props',this.props);
    return (
      <table className='table'>
          <thead>
              <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Giá bán</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                  <th>Thao tác</th>
              </tr>
          </thead>
            <tbody>
               {this.props.gioHang.map((spGH,index)=>{
                   return  <tr key={index}>
                   <td>{spGH.maSP}</td>
                   <td>{spGH.tenSP}</td>
                   <td><img src={spGH.hinhAnh} alt="..." width={50}/></td>
                   <td>{spGH.giaBan}</td>
                   <td><button className='btn btn-info' onClick={()=>{
                     this.props.tangGiamSoLuong(spGH.maSP,-1)
                   }}>-</button>{spGH.soLuong}<button className='btn btn-info' onClick={()=>{
                    this.props.tangGiamSoLuong(spGH.maSP,1)
                  }}>+</button></td>
                   <td>{spGH.soLuong * spGH.giaBan}</td>
                   <td><button className='btn btn-danger' onClick={()=>{this.props.xoaGioHang(spGH.maSP)}}>Xóa
                   </button>
                   </td>
               </tr>
               })}
            </tbody>
      </table>
    )
  }
}
// Định nghĩa hàm lấy dữ liệu từ redux về component này
const mapStateToProps = (rootReducer) => {
    //rootReducer: là state tổng của ứng dụng
    //hàm này sẽ tạo ra 1 props cho component ở lệnh return
    return{
        gioHang: rootReducer.gioHangReducer,
        number: rootReducer.numberReducer
    }
}

// Định nghĩa hàm mapDispatchToProps tạo ra props là phương thức gửi dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
 return {
   xoaGioHang: (maSPXoa) => {
    //  console.log('Mã sản phẩm click xóa', maSPXoa)
    //  alert(maSPXoa);
    if (window.confirm('Bạn có muốn xóa không?')){
     const action = {
       type: 'XOA_GIO_HANG',
      maSPXoa
     }
     //SỬ dụng hàm dispatch để đưa action lên tất cả reducer
     dispatch(action);
   }
 },
 tangGiamSoLuong: (maSP,soLuong) =>{
  const action = {
    type: 'TANG_GIAM_SO_LUONG',
    maSP,
    soLuong
  }
  //Sau khi bấm + - tạo dữ liệu action gửi lên redux
  dispatch(action);
 }
}
}
//Khi connect được gọi sẽ trả về 1 component đã được kết nối với redux store, và export default component đó ra luôn
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);


