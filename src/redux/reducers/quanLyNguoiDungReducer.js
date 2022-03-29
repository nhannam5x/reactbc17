const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyễn Văn A",
      matKhau: "123123",
      email: "nguyenvana@gmail.com",
      soDienThoai: "1234567",
      maLoaiNguoiDung: "QuanTri",
    },
    {
      taiKhoan: "tranthibi",
      hoTen: "Trần Thị B",
      matKhau: "123123",
      email: "tranthib@gmail.com",
      soDienThoai: "1234567",
      maLoaiNguoiDung: "NguoiDung",
    },
  ],
  nguoiDungSua: [
    {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "QuanTri",
    },
  ],
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XOA_NGUOI_DUNG": {
      let mangNguoiDung = [...state.mangNguoiDung];
      mangNguoiDung = mangNguoiDung.filter(
        (nd) => nd.taiKhoan !== action.taiKhoan
      );

      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }
    case "THEM_NGUOI_DUNG": {
      let mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }

    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case "CAP_NHAT_THONG_TIN": {
        let mangNguoiDung = [...state.mangNguoiDung]
        let ndUpdate = mangNguoiDung.find(nguoiDung => nguoiDung.taiKhoan === action.nguoiDung.taiKhoan);
        if(ndUpdate){
            //Lấy giá trị người dùng thay đổi (action.nguoiDung)
            // ndUpdate.hoTen = action.nguoiDung.hoTen;
            for(let key in ndUpdate){
                ndUpdate[key] = action.nguoiDung[key];
            }
        //Sau khi sửa cập nhật lại state
        }
        state.mangNguoiDung = mangNguoiDung;
            return{...state};
    }

    default:
      return state;
  }
};
