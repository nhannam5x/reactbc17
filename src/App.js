import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
      {/* <Route exact path={"/contact"} render={(propsRoute)=>{
        return <div>
          <HeaderHome />
          <Contact {...propsRoute}/>
        </div>
    
    }} /> */}
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"}  component={Register}/>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
