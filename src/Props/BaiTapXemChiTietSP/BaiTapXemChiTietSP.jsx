import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTietSP extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    gioHang: [
        // {maSP:1, tenSP:'Iphone',hinhAnh:'./img/meizuphone.jpg',giaBan:1000,soLuong:1}
    ]
  };

  //State
  tangGiamSoLuong = (maSP,soLuong) => {
    let gioHangUpdate= [...this.state.gioHang]
    let spTangGiam = gioHangUpdate.find(sp => sp.maSP === maSP);
    if(spTangGiam){
      spTangGiam.soLuong += soLuong;
    }
    if(spTangGiam.soLuong<1){
      if(window.confirm('Bạn có muốn xóa hay không')){
        this.xoaGioHang(spTangGiam.maSP);
        return;
      }
      spTangGiam.soLuong -= soLuong;
    }


    this.setState({
      gioHang: gioHangUpdate
    })
  }

  //Hàm xóa giỏ hàng viết tại nơi chứa state.gioHang
  xoaGioHang = (maSPClick) =>{
      console.log(maSPClick);
      let gioHangUpdate = [...this.state.gioHang];
      let index = gioHangUpdate.findIndex(sp => sp.maSP == maSPClick);
    if(index != -1){
        gioHangUpdate.splice(index,1);
    }
    this.setState({
      gioHang: gioHangUpdate
    })
  }


  //State ở đâu thì hàm setState ở đó
  themGioHang = (sanPhamClick) =>{
    //Mỗi lần click vào sản phẩm => tạo thuộc tính soLuong cho sản phẩm đó
    let spGioHang = {...sanPhamClick,soLuong:1};
    // Sao chép giỏ hàng ra để xử lý
    let gioHangUpdate = [...this.state.gioHang];

    //Kiểm tra sản phẩm đó có trong giỏ hàng hay chưa
    let spGH = gioHangUpdate.find(sp => sp.maSP === spGioHang.maSP);
    if(spGH){//sản phẩm đã có trong giỏ hàng
        spGH.soLuong +=1;
    } else {
        gioHangUpdate.push(spGioHang); //Chưa có thì sẽ thêm vào giỏ hàng
    }

    //setState giỏ hàng
    this.setState({
        gioHang: gioHangUpdate
      });
  }
  xemChiTiet = (sanPhamClick) => {
    console.log("sanPhamClick", sanPhamClick);
    //Lấy sản phẩm chi tiết thay thế cho sản phẩm chi tiết
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  tinhTongSoLuong = () => {
    //giỏ hàng [{maSP:1,soLuong:2}{maSP:3,soLuong:5}]
    // let tongSoLuong = 0;

    // for (let spGH of this.state.gioHang){
    //   tongSoLuong += spGH.soLuong;
    // }
    // return tongSoLuong;

    return this.state.gioHang.reduce((soLuong,spGioHang,index)=>{
      return soLuong += spGioHang.soLuong;
    },0);

    //output: tổng số lượng
  }

  render() {
    let {
      maSp,
      tenSP,
      hinhAnh,
      giaBan,
      manHinh,
      ram,
      rom,
      cameraSau,
      cameraTruoc,
      heDieuHanh,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <div className="mt-5">
          <h3
            data-toggle="modal"
            data-target="#modelId"
            className="text-danger font-weight-bold text-right"
            style={{ cursor: "pointer" }}
          >
            Giỏ hàng({this.tinhTongSoLuong()})
          </h3>
          <GioHang tangGiamSoLuong={this.tangGiamSoLuong} gioHang={this.state.gioHang} xoaSanPham={this.xoaGioHang}/>
        </div>
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">
          {this.mangDienThoai.map((sanPham, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPham sp={sanPham} hamXemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/>
              </div>
            );
          })}
          {/* <div className="col-4">
                <div className="card">
                <img src="https://picsum.photos/id/200/1" alt="..." height={300}/>
                <div className="card-body">
                    <p>Name</p>
                    <p>Giá</p>    
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
                </div>    
            </div> */}
          {/* <div className="col-4">
                <div className="card">
                <img src="https://picsum.photos/id/200/1" alt="..." height={300}/>
                <div className="card-body">
                    <p>Name</p>
                    <p>Giá</p>    
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
                </div>    
            </div>    
            <div className="col-4">
                <div className="card">
                <img src="https://picsum.photos/id/200/1" alt="..." height={300}/>
                <div className="card-body">
                    <p>Name</p>
                    <p>Giá</p>    
                    <button className="btn btn-success">Xem chi tiết</button>
                </div>
                </div>    
            </div>         */}
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="" className="w-100" height={400} />
          </div>
          <div className="col-8">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
