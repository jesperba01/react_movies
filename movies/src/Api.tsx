import axios from 'axios';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
  first_air_date: string;
}

const apiKey = "4ba04b36da1b0f7da8622918c9908ef8";
const popular = "https://api.themoviedb.org/3/movie/popular?api_key=4ba04b36da1b0f7da8622918c9908ef8";
const toprated = "https://api.themoviedb.org/3/movie/top_rated?api_key=4ba04b36da1b0f7da8622918c9908ef8";
const popular_tv = "https://api.themoviedb.org/3/tv/popular?api_key=4ba04b36da1b0f7da8622918c9908ef8";
const toprated_tv = "https://api.themoviedb.org/3/tv/top_rated?api_key=4ba04b36da1b0f7da8622918c9908ef8";

export const fetchMovies = async (selectedList: string, limit?: number): Promise<Movie[]> => {
  try {
    let url;

    if (selectedList === 'toprated') {
      url = toprated;
    } else if (selectedList === 'popular') {
      url = popular;
    } else if (selectedList === 'toprated_tv') {
      url = toprated_tv;
    } else if (selectedList === 'popular_tv') {
      url = popular_tv;
    } else {
      throw new Error('Invalid category selected');
    }

    const response = await axios.get<{ results: Movie[] }>(url);
    let result = response.data.results;
    if (limit) {
      result = result.slice(0, limit);
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