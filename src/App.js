import "./styles.css";
import { useState, useEffect } from "react";
import Quotes from "./Components/Quotes";
export default function App() {
  const [data, setData] = useState({ message: "welcome" });

  const fetchData = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Quotes data={data} fetchData={fetchData()} />
    </>
  );
}
