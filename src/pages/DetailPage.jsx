  import React from 'react';
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom"

  const DetailPage = () => {
    const { id } = useParams();
    console.log("Received ID:", id);
  
  const[searchs, setSearchs] = useState();

 useEffect (()=>{
const fetching = async () => {
try {
  const res =await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=1ee1074da431483da1eee737cdca4d82`)
  
  const data = await res.json()
  console.log(data);
   console.log("Fetched articles:", data.articles);
  setSearchs(data.articles )
 

} catch (error) {
  console.log(error)
}
}
},[]);

    return (
      <>
      <div className="card" style={{width: "18rem"}}>
    <img src={searchs?.urlToImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{searchs?.title}</h5>
      <p className="card-text">{searchs?.description}</p>
      <h5 className="card-title">{searchs?.author}</h5>
      <p className="card-text" >{searchs?.publishedAt}</p>
    </div>
  </div>
      </>
    )
  }

  export default DetailPage




