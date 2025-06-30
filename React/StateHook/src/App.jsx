import React, { useState } from "react";
const App = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1 className="time">{time}</h1>
      <button className="button" onClick={updateTime}>Get Time</button>
    </div>
  );
};
export default App;
