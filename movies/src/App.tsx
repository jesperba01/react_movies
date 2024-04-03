import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';
import  NamedTupleMember  from 'typescript';
import Card from 'react-bootstrap/Card';
import { CardTitle } from 'react-bootstrap';



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
        <Card className="movieContainer shadow">
        {items.poster_path && (
            <Card.Img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={`${items.title} Poster`}/>
          )}
        <Card.Body className="text-center">
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>{items.release_date}</Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}


export default App;
