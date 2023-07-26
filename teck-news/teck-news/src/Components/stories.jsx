import React from "react";
import { useEffect } from "react";

const stories = () => {
  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) =>{

   try{
    const res = await fetch(url)
    const data = await res.json();
    console.log(res)
    console.log(data)
   }catch{
    console.log('error', error)
   }

  }

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <h2>My Tech News Post</h2>
    </>
  );
};

export default stories;
