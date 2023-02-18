import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
