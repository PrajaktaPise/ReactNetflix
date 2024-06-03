import React, { useEffect, useState } from 'react'
import "./Player.css";
import backarray from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
const {id}=useParams();
const navigate=useNavigate();

  const [apidata,setapidata]=useState({
       name:"",
       key:"",
       published_at:"",
       typeof:"",
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTFlZjNjZjZjZDZmNTU1MmYzYzdiMTgzZGU3YzA5ZSIsInN1YiI6IjY2NTFhNjg1ODgzOGQxNzk3ZDk5YTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lxdxbfnJULhO7tvucltUFOVX5JZdn3H8Yj7i5LBldfA'
    }
  };
  
 useEffect(()=>{
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results[0]))
    .catch(err => console.error(err));


 },[])


  return (
    <div className='player'>
      <img src={backarray} alt="" onClick={()=>{
        navigate(-2)
      }}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder='0' allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player
