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
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/Hooks/UseEffect/UseEffectDemo";
import UseCallBackDemo from "./pages/Hooks/UseCallBack/UseCallBackDemo";
import UseMemoDemo from "./pages/Hooks/UseMemo/UseMemoDemo";
import UseRef from "./pages/Hooks/UseRef/UseRef";
import ReduxHook from "./pages/Hooks/ReduxHook/ReduxHook";
import ToDoListHook from "./pages/Hooks/ToDoListHook/ToDoListHook";
import DemoHOC from "./pages/HOC/DemoHOC/DemoHOC";
import ModalHOC from "./pages/HOC/DemoHOC/ModalHOC";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Index from "./pages/AdminPage/Index/Index"
import User from "./pages/AdminPage/Users/User";
import DemoAntD from "./pages/DemoAntD/DemoAntD";
import DemoLayout from "./pages/DemoAntD/DemoLayout";


function App() {
  return (
    <BrowserRouter>
      <ModalHOC />
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <UserTemplate exact path={"/login"} component={Login} />
        <UserTemplate exact path={"/register"} component={Register} />
        <AdminTemplate path={'/admin/index'} component={Index} />
        <AdminTemplate path={'/admin/user'} component={User} />
        <AdminTemplate path={'/admin/demoantd'} component={DemoAntD} />
        <Route
          exact
          path={"/profile"}
          render={(propsRoute) => {
            return (
              <div>
                <HeaderHome />
                <Profile {...propsRoute} />
              </div>
            );
          }}
        />
        <Route
          exact
          path={"/detail/:id"}
          render={(propsRoute) => {
            return (
              <div>
                <HeaderHome />
                <Detail {...propsRoute} />
              </div>
            );
          }}
        />
          <Route path={'/admin/demolayout'} component={DemoLayout}/>
          
        <Route exact path={"/todoapp"} component={ToDoApp} />
        <Route exact path={"/usestate"} component={UseStateDemo} />
        <Route exact path={"/useeffect"} component={UseEffectDemo} />
        <Route exact path={"/usecallback"} component={UseCallBackDemo} />
        <Route exact path={"/usememo"} component={UseMemoDemo} />
        <Route exact path={"/useref"} component={UseRef} />
        <Route exact path={"/reduxhook"} component={ReduxHook} />
        <Route exact path={"/demohoc"} component={DemoHOC} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
