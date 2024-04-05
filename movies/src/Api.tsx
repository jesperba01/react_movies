import axios from 'axios';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const apiKey = "4ba04b36da1b0f7da8622918c9908ef8";
const popular = "https://api.themoviedb.org/3/movie/popular";
const toprated = "https://api.themoviedb.org/3/movie/top_rated";
const popular_tv = "https://api.themoviedb.org/3/tv/top_rated";
const toprated_tv = "https://api.themoviedb.org/3/tv/popular";

export const fetchMovies = async (selectedList: string, limit?: number): Promise<Movie[]> => {
  try {
    const url =
      selectedList === 'toprated'
        ? toprated
        : selectedList === 'popular'
        ? popular
        : selectedList === 'toprated_tv'
        ? toprated_tv
        : popular_tv;

    const response = await axios.get<{ results: Movie[] }>(`${url}?api_key=${apiKey}`);
    let result = response.data.results;
    if (limit) {
      result = result.slice(0, limit); // Get the top `limit` movies
    }
    return result.map(movie => ({
      ...movie,
      cleanPercentage: cleanPercentage(movie.vote_average) 
    }));
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

const cleanPercentage = (percentage: number): number => {
  const isNegativeOrNaN = !Number.isFinite(percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : percentage;
};