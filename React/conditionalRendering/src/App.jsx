import React,  {useState} from "react";
import Login from "./component/Login";

var is_registered = true;

function App() {
  return (
    <div className="container">
        <Login is_registered={is_registered} />
    </div>
  );
}

export default App;
// const [count, setCount] = useState(0)
// const increase = () => {
//   setCount(count + 1)
// }
// const App = () =>{
//   return (
//     <div>
//       <h1>0</h1>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }
// export default App;