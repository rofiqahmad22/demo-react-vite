e;
import { useEffect, useState } from "react";
export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    console.log("Terjadi Kesalahan!", counter);
  });

  return (
    <div>
      <button onClick={increment} className="bg-teal-500 p-2">
        +
      </button>
      <p>{counter}</p>
      <button onClick={decrement} className="br-teal-500 p-2">
        -
      </button>
    </div>
  );
}
