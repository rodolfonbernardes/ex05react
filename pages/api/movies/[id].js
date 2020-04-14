import { MoviesService } from "../../../api/services/MoviesService";

export default (req, res) => {
  const {
    query: {id},
    method
  } = req;    
    MoviesService.getPopularMovie(id).then(resp => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(resp.data);
    });
};
