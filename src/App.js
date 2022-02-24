import logo from './logo.svg';
import './App.css';
import HeaderClass from './components/HeaderClass';
import HeaderFunc from './components/HeaderFunc';
import HomeComponent from './components/BaiTapLayout/HomeComponent';
import Databinding from './DataBinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      <HandleEvent/>
      {/* <Databinding /> */}
      {/* <HomeComponent/> */}
      {/* hello cybersoft
      <HeaderClass />
      <HeaderClass />
      <HeaderClass />
      <HeaderFunc /> */}
    </div>
  );
}

export default App;
