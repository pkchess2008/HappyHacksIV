// import Image from 'next/image'
"use client";

import React,{useState,useEffect} from 'react'

export default function Home() {

  const [message, setMessage]=useState("message")

  

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/home")
    .then(res => res.json())
    .then((data)=>{
      // console.log(data);
      setMessage(data.message);
    });
  },[]);

  return (
    <div>{message}</div>
  )
}
