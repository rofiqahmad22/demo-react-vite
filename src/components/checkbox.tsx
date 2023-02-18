import React, { useState } from "react";

export function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLiked(event.target.checked);
  }

  return (
    <>
      <h1 className="font-bold text-3xl">Checkbox</h1>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I Liked
      </label>
      <p>You {liked ? "liked" : "didn't like"}</p>
    </>
  );
}
