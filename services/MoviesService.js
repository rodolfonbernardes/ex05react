import axios from "axios";

export class MoviesService {
  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _withBaseUrl(path) {
    return `http://localhost:3000/api/${path}`;
  }

  static getPopularMovies() {
    return axios.get(MoviesService._withBaseUrl("movies"));
  }
  static getPopularMovie(id) {
    return axios.get(MoviesService._withBaseUrl(`movies/${id}`));
  }
}
