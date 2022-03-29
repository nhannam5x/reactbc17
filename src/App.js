import logo from './logo.svg';
import './App.css';
import HeaderClass from './components/HeaderClass';
import HeaderFunc from './components/HeaderFunc';
import HomeComponent from './components/BaiTapLayout/HomeComponent';
import Databinding from './DataBinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import Rendering_Conditions from './Rendering_Conditions/Rendering_Conditions';
import Ex1StateDemo from './StateDemo/Ex1StateDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import QuanLyDanhSachPhim from './RenderWithMap/QuanLyDanhSachPhim';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesShop from './Props/ShoesShop/ShoesShop';
import PhoneShop from './Props/PhoneShop/PhoneShop';
import BaiTapXemChiTietSP from './Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP';
import BaiTapGioHangRedux from './DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import GameXucXac from './DemoRedux/GameXucXac/GameXucXac';
import BaiTapQuanLyNguoiDung from './DemoRedux/ReactForm/BaiTapQuanLyNguoiDung';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
   <BrowserRouter>
    <Route path='/home' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
   
   </BrowserRouter>
  );
}

export default App;
