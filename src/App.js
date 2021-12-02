import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({ message: "welcome" });

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
    </>
  );
}
