import "./styles.css";
import React, { useState, useEffect, useContext } from "react";
import Destruct from "./Components/Destruct";

export default function App() {
  const [data, setData] = useState({ message: "welcome" });
  const globalData = React.createContxet({ Message: "AnotherContext" });
  const fetchData = async () => {
    try {
      const resp = await fetch("https://foodish-api.herokuapp.com/api/");
      const quotes = await resp.json();
      console.log(quotes);
      setData(quotes);
    } catch (error) {
      setData({ message: "Cannot communicate with The API " + error });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <img src={data.image} alt="food" />
      <Destruct />
    </>
  );
}
export { globalData };
