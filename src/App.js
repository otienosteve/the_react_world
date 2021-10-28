import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState(["HI"]);
  let handleClick = (vars) => {
    vars = setName();
  };
  return (
    <div className="App">
      {name.map((name) => {
        for (var n = 1; n <= name.length; n++) {
          return <h2>{name[0]}</h2>;
        }
      })}
      <button onClick={handleClick}>Click ME!</button>
    </div>
  );
}
