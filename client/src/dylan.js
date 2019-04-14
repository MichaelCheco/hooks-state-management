import React, { useContext } from "react";
import { CountStore } from "./providers/countProvider";
import { UserStore } from "./providers/userProvider";
function DylanIsCool() {
  const value = useContext(CountStore);
  const user = useContext(UserStore);
  const { count, d } = value.state; // pulling values from useContext
  const { name, age } = user.state.user; // same
  return (
    <div>
      <h1>{d}</h1>
      <h2 onClick={() => user.dispatch({ type: "append" })}>
        {name} 👈 click this
      </h2>
      <h4> {count < 5 ? `add more 😃` : `chill 🖐`} </h4>
      <h3>{count}</h3>
      <button onClick={() => value.dispatch({ type: "add" })}>➕ add</button>
      <button onClick={() => value.dispatch({ type: "subtract" })}>
        ➖ subtract
      </button>
    </div>
  );
}

export default DylanIsCool;
