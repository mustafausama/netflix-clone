const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=2e3e12239c02409734107e141e209dc3&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=2e3e12239c02409734107e141e209dc3&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&language=en-US&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&language=en-US&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&language=en-US&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&language=en-US&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=2e3e12239c02409734107e141e209dc3&language=en-US&with_genres=99`
};

export default requests;
