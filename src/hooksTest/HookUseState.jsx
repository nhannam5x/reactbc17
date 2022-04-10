import React, { useState } from "react";
export default function HookUseState(props) {
  const [state, setState] = useState({ like: 0 });
  return (
    <div className="m-5" style={{ width: 200, height: 100 }}>
      <div className="card text-left">
        <img
          className="card-img-top" src="https://picsum.photos/200/200" alt="picture"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: "red" }}> {state.like} ♥</p>
        </div>
      </div>
      <span className="display-4" style={{ color: "pink", cursor: "pointer" }} onClick={() => {
          setState({ like: state.like + 1 });
        }}> ♥ </span>
    </div>
  );
}
