import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const increase = () =>{
    setCount(count + 1);
  }
  const Decrease = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};
export default App;
