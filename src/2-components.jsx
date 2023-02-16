import { useState } from "react";
import ReactDOM from "react-dom/client";

// const fruit = [
//   "apple",
//   "orange",
//   "pear",
//   "grapefruit",
//   "lemon",
//   "apricot",
//   "banana",
//   "strawberry",
// ];

// function randomFruit() {
//   return fruit[Math.floor(Math.random() * fruit.length)];
// }




function TodoList(props) {

  let items=[];

  return (
  <ul style={{color:props.color}}>
    <li>First list item</li>
  </ul>
  );
}

function App() {
  const [items, setItems] = useState([
    "List item 1", 
    "List item 2",
    "List item 3",
  ]);

  return (
    <div>
      <TodoList items={items}  color="red"/>
      
      <button onClick={() => {}}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
