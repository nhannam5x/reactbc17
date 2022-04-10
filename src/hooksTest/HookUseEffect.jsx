import React, { useEffect, useState } from "react";
export default function HookUseEffect(props) {
  let [number, setNumber] = useState(1);
  useEffect(() => {
    console.log("Hàm được thực thi sau mỗi lẫn render");
    console.log("Cách viết này ứng với cả 2 lifeCycle didMount và didUpdate");
  });
  useEffect(() => {
    console.log("Hàm gọi sau lần render đầu tiên");
    return () => {
      console.log("Hàm định nghĩa bên trong đây sẽ được gọi cuối cùng thay willUnmount")}}, []);
  useEffect(() => {
    console.log("Hàm gọi mỗi khi number (state) thay đổi sau khi render ! thay didUpdate ")}, [number]);
  return (
    <div className="container">
      Number: {number}
      <button className="btn btn-success" onClick={() => {setNumber(number + 1);
        }}> + </button>
    </div>
  );
}
