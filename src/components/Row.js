import axios from "../axios";
import "./Row.css";
import React, { useEffect, useState } from "react";

function Row(props) {
  const { title, fetchUrl, isLarger = false } = props;
  const Base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(movies);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            (movie.poster_path || movie.backdrop_path) &&
              <img
                key={movie.id}
                className={`${isLarger ? "row_poster_large" : "row_poster"}`}
                src={`${Base_url}${
                  isLarger ? movie.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
              />
            )
            }
      </div>
    </div>
  );
}

export default Row;
