import React, { useState, memo } from "react";

export default function HookUseCallback() {
  let { like, setLike } = useState(1);

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
      <Comment like={like} />
    </div>
  );
}
