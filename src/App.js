import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({ message: "welcome" });

  const fetchData = async () => {
    try{
      const resp = await fetch("https://axoltlapi.herokuapp.com/");
      const quotes = await resp.json();
      console.log(quotes.results);
      setData(quotes.results);

    }catch(error){
      setData({message:"Cannot communicate with The API "+error})
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (<><h1>{data.message}</h1>
    </>
  );
}
