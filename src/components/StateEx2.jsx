import React, { useState } from "react";

export default function StateEx1() {
  const [state, setState] = useState({ count: 0 });
  function click() {
    setState((state) => ({ count: state.count + 1 }));
  }
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
