import "./styles.css";
import React, { useState, useEffect, } from "react";

export default function App() {
 const [Value, setValue]=useState({Message:"welcome",Greeting:"hello"})
 const [misc,setMisc]=useState([])
 const fetchData=async ()=>{
   try{
   const response= await fetch('https://bible-api.com/john%203:16');

   const data= await response.json();
  // console.log(data) ;
   setValue(data);
  //console.log(data.verse[0]);
  //setMisc(data.verse);

   }catch{

console.log("error while fetching data");
   }
 }
  useEffect(() => {
fetchData();
  }, []);
  const changeMessage=()=>{
    setValue({...Value, Message:"Is it really a message"})
  }

  return (
    <>
     
   <h3>{Value.reference}</h3>
   <h3>{Value.text}</h3>
  
   <button onClick={changeMessage} style={{border:"2px solid blue",cursor:"pointer", background:"none"}}>change Message</button>
    </>
  );
}

