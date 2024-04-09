import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from './Api';
import MovieCard from './MovieCard'; 

interface SearchProps {
  onAddToFavorites: (movie: Movie) => void;
}

const Search: React.FC<SearchProps> = ({ onAddToFavorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return; // Don't search if the query is empty or only whitespace
    }
    
    try {
      setIsLoading(true); 
      const response = await axios.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/search/movie?api_key=4ba04b36da1b0f7da8622918c9908ef8&query=${searchQuery}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleAddToFavorites = (movie: Movie) => {
    onAddToFavorites(movie); // Call the onAddToFavorites function passed from the parent component
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="text-center mb-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
          <div className="row">
            {searchResults.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
                <MovieCard
                  movie={movie}
                  isFavorite={false}
                  onAddToFavorites={() => handleAddToFavorites(movie)} // Pass the movie to handleAddToFavorites
                  onRemoveFromFavorites={() => {}} // This is not needed in the search component
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;