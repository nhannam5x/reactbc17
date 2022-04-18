import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import ModalHOC from "./ModalHOC";

export default function DemoHOC(props) {
    const dispatch = useDispatch();
    const [ComponentContent,setComponentContent] = useState(<div>Default Conent</div>)
  return (
    <div className="container">
      <h3 className="display-4">Demo hoc modal</h3>
      <button
        className="btn btn-info mr-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={()=>{
            //setComponentContent(<Register/>)
            const action = {
                type: 'OPEN_FORM',
                Component:<Register />,
                title: 'đăng ký'
            }
            //Gửi dữ liệu action lên redux
            dispatch(action)
        }}
      >
        Đăng ký
      </button>
      <button
        className="btn btn-success ml-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={()=>{
            const action = {
                type: 'OPEN_FORM',
                Component:<Login />,
                title: 'đăng nhập'
            }
            dispatch(action)
        }}
      >
        Đăng nhập
      </button>

      {/* <ModalHOC
        title={"Đăng ký"}
        Com={ComponentContent}
      /> */}
    </div>
  );
}

//HOC là higher order component (Component nhận vào tham số là component khác để tạo ra giao diện có chứa logic của mình)