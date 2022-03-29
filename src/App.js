import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunc from "./components/HeaderFunc";
import HomeComponent from "./components/BaiTapLayout/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import Rendering_Conditions from "./Rendering_Conditions/Rendering_Conditions";
import Ex1StateDemo from "./StateDemo/Ex1StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import QuanLyDanhSachPhim from "./RenderWithMap/QuanLyDanhSachPhim";
import DemoProps from "./Props/DemoProps/DemoProps";
import ShoesShop from "./Props/ShoesShop/ShoesShop";
import PhoneShop from "./Props/PhoneShop/PhoneShop";
import BaiTapXemChiTietSP from "./Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import GameXucXac from "./DemoRedux/GameXucXac/GameXucXac";
import BaiTapQuanLyNguoiDung from "./DemoRedux/ReactForm/BaiTapQuanLyNguoiDung";
import ReactLifeCycle from "./ReactLifeCycle/ReactLifeCycle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
    <HeaderHome />
    <Switch>
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/contact"} component={Contact} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={'/profile'} component={Profile}/>
      <Route exact path={"/"} component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
