import "./styles.css";
import { useState, useEffect} from "react";

export default function App() {

  const [data,setData]=useState({message:"welcome"})
   
const fetchData=  async ()=>{
fetch('https://api.quotable.io/random').then((res)=>{return res.json()}).then((data)=>{setData(data)})
}
useEffect(()=>{
  fetchData();
},[])
 return(<><h2>{data.author}</h2>
 <h3>{data.content}</h3>
 <button type="button" style={{color:"green",background:"none",border:"none", cursor:"pointer"}} onClick={()=>fetchData()}>Get Quote</button></>);

 
}
