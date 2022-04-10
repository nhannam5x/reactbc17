import React, { useState, memo } from "react";

export default function HookUseMemo() {
  let { like, setLike } = useState(1);

  let renderNotify = () =>{
    return `Bạn đã thả ${like} ♥ !`
  }
  
  const callBackRenderNotify = userCallBack(renderNotify,[like])

  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}> ♥ </span>
      <br />
      <Comment renderNotify={callBackRenderNotify} />
    </div>
  );
}
