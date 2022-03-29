import {combineReducers,createStore} from 'redux';
import { gameXucXacReducer } from './reducers/gameXucXacReducer';
import { gioHangReducer } from './reducers/gioHangReducers'
import { quanLyNguoiDungReducer } from './reducers/quanLyNguoiDungReducer'

let stateGioHangDefault = [{maSP:1, tenSP:'iphone',giaBan:1000,soLuong:1,hinhAnh:'https://i.pravatar.cc?u=1'}]

//rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    gameXucXacReducer: gameXucXacReducer,
    gioHangReducer,
    quanLyNguoiDungReducer: quanLyNguoiDungReducer
})



export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());