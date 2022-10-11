import { useState } from "react";

export default function Up() {
  const [value, setValue] = useState("아직 안바뀜");

  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}
function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}
function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}
function E({ setValue }) {
  function click() {
    setValue("A의 값을 변경");
  }
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>click</button>
    </div>
  );
}
