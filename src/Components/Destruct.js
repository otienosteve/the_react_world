import { useState, useContext } from "react";
import { globalData } from "./../App";
const Destruct = () => {
  const newContext = useContext(globalData);
  console.log(newContext);
  const [value, setValue] = useState({
    message: 12,
    Age: 12,
    Greeting: "Hello"
  });
  const changeValue = () => {
    setValue({ ...value, message: "Greetings" });
  };
  return (
    <>
      <h2>{value.message}</h2>
      <button onClick={changeValue}>Change Value</button>
    </>
  );
};
export default Destruct;
