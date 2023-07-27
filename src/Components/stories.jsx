import React from "react";
import { useEffect} from "react";

const stories = () => {
  let isLoading = true;
  
  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) =>{

   try{
    const res = await fetch(url)
    const data = await res.json();
    console.log(res)
    console.log(data)
    // isLoading = false;
   }catch{
    console.log('error', error)
   }

  }
if(isLoading){
  return(
   <>
   <h1>Loading....</h1>
   </>
  );
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
