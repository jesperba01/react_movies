import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';
import { NamedTupleMember } from 'typescript';

interface Movies{
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function App() {

  const [movies, seMovies] = useState<Movies[]>([]);

  const apiKey = "4ba04b36da1b0f7da8622918c9908ef8";
  const popular = "https://api.themoviedb.org/3/movie/popular";

useEffect(() =>{
  fetchData();
}, [])
  const fetchData = () =>{
    axios.get(`${popular}?api_key=${apiKey}`).then((response) =>{
      const result = response.data.results;
      seMovies(result);
    })
  }
  return (
    <div className="App">
      {movies.map((items) => (
        <div className="movieContainer" key={items.id}>
          <h2>{items.title}</h2>
          {items.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`}/>
          )}

          <p>{items.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
