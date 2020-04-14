import React from "react";
import { MoviesService } from "../services/MoviesService";

export const MovieView = props => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    console.log(props);
    MoviesService.getPopularMovie(props.movieId).then(ret => {
      setFilmes(ret);
    });
  }, []);

  function viewfilm(_filme) {
    return <>{JSON.stringify(_filme)}</>;
  }

  return <>{viewfilm(filmes)}</>;
  
};
