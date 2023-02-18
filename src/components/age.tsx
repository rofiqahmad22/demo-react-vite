import { useState } from "react";

export function Age() {
  const [count, setAge] = useState(21);

  function increment() {
    setAge(count + 1);
  }

  return (
    <div>
      <p>Your Age: {count}</p>
      <button onClick={increment}>age +</button>
    </div>
  );
}
