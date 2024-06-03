import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCard = ({title,categary}) => {
  
  const [apidata,setapidata]=useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTFlZjNjZjZjZDZmNTU1MmYzYzdiMTgzZGU3YzA5ZSIsInN1YiI6IjY2NTFhNjg1ODgzOGQxNzk3ZDk5YTAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lxdxbfnJULhO7tvucltUFOVX5JZdn3H8Yj7i5LBldfA'
    }
  };
  
 
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${categary?categary:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-card">
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
