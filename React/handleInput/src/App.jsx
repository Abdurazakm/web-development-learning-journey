import React, { useState } from "react";

const App = () => {
  const [header, setheader] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const handleClick = () => {
    setheader("Submitted");
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = ()=>{
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>{header}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        type="submit"
        style={{ backgroundColor: isMouseOver ? "black" : "white" }} 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
