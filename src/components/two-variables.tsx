import React, { useState } from "react";

export function Form() {
  const [name, setName] = useState("Rofiq");
  const [age, setAge] = useState(24);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function increment() {
    setAge(age + 1);
  }

  return (
    <>
      <h1 className="font-bold text-3xl">Two Variable</h1>
      <input value={name} onChange={handleChange} />
      <button onClick={increment}>Increment Age</button>
      <p>
        Hello, my name is {name}, my age is {age}
      </p>
    </>
  );
}
