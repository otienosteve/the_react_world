import "./styles.css";
import { useState, useEffect } from "react";
import Quotes from "./Components/Quotes";
export default function App() {
  const [data, setData] = useState({ message: "welcome" });

  const fetchData = async () => {
    const resp = await fetch("https://randomuser.me/api/");
    const quotes = await resp.json();
    //console.log(quotes.results);
    setData(quotes.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Quotes data={data} fetchData={fetchData} />
    </>
  );
}
