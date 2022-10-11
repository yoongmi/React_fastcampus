import { useState, useMemo, useCallback } from "react";

function sum(persones) {
  console.log("sum..");
  return persones.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function StateEx4() {
  const [value, setValue] = useState();
  const [persones] = useState([
    { name: "mark", age: 38 },
    { name: "lina", age: 40 },
  ]);

  const count = useMemo(() => {
    return sum(persones);
  }, [persones]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  function change(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <input type="text" name="" id="" value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
}
