import { useState } from "react";

export function Myinput() {
  const [text, setText] = useState("Hello");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Input</h1>
      <input value={text} onChange={handleChange} />
      <p>You Typed: {text}</p>
      <button onClick={() => setText("Hello")}>Reset</button>
    </>
  );
}
