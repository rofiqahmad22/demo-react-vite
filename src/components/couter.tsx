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
    <div className="flex gap-3">
      <button onClick={decrement} className="bg-teal-500 p-1 rounded-sm">
        -
      </button>
      <p>{counter}</p>
      <button onClick={increment} className="bg-teal-500 p-1 rounded">
        +
      </button>
    </div>
  );
}
