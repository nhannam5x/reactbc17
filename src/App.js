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
import Detail from "./pages/Detail/Detail";
import ToDoApp from "./pages/DemoAxios/ToDoApp/ToDoApp";

function App() {
  return (
    <BrowserRouter>

    <Switch>
      <Route exact path={"/home"} render={(propsRoute)=>{/*propRoute là props của thẻ Route bao gồm: history,match,location */ 
        return <div>
          <HeaderHome />
          <Home {...propsRoute}/>
        </div>
    
    }}/>
      <Route exact path={"/about"} render={(propsRoute)=>{
        return <div>
          <HeaderHome />
          <About {...propsRoute}/>
        </div>
    
    }}/>
      <Route exact path={"/contact"} render={(propsRoute)=>{
        return <div>
          <HeaderHome />
          <Contact {...propsRoute}/>
        </div>
    
    }} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={'/profile'} render={(propsRoute)=>{
        return <div>
          <HeaderHome />
          <Profile {...propsRoute}/>
        </div>
    
    }}/>
      <Route exact path={'/detail/:id'} render={(propsRoute)=>{
        return <div>
          <HeaderHome />
          <Detail {...propsRoute}/>
        </div>
    
    }}/>
    <Route exact path={"/todoapp"} component={ToDoApp} />
      <Route exact path={"/"} render={(propsRoute)=>{/*propRoute là props của thẻ Route bao gồm: history,match,location */ 
        return <div>
          <HeaderHome />
          <Home {...propsRoute}/>
        </div>
    
    }}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
