import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div 
    class={"current-count-"+count}
    id="header"
    style={{color: count<10?"red":"blue"}}>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
