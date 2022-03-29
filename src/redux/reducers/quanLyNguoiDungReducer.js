const stateDefault = {
    mangNguoiDung:[
        {taikhoan:'nguyenvana',hoTen:'Nguyễn Văn A',matKhau:'123123',email:'nguyenvana@gmail.com',soDienThoai:'1234567',loaiNguoiDung:'QuanTri'},
        {taikhoan:'tranthibi',hoTen:'Trần Thị B',matKhau:'123123',email:'tranthib@gmail.com',soDienThoai:'1234567',loaiNguoiDung:'NguoiDung'},
    ],
    nguoiDungSua:[
        {taikhoan:'',hoTen:'',matKhau:'',email:'',soDienThoai:'',loaiNguoiDung:''},
    ]

}

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch(action.type){
        case 'XOA_NGUOI_DUNG':{
            let mangNguoiDung = [...state.mangNguoiDung];
            mangNguoiDung = mangNguoiDung.filter(nd => nd.taikhoan !== action.taikhoan);
            
            state.mangNguoiDung = mangNguoiDung;
            return {...state};
        }
        case 'THEM_NGUOI_DUNG':{
            let mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            state.mangNguoiDung = mangNguoiDung;
            return {...state};
        }
        
        case 'SUA_NGUOI_DUNG':{
            state.nguoiDungSua = action.nguoiDung;
            return {...state};
        }
        default: return state;
    }
}