import React from "react";
import { useParams } from "react-router";
import { GoPrimitiveDot } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";

const SingleMovie = ({ movie, handleFavorites }) => {
  const { title } = useParams();
  const poster = "https://image.tmdb.org/t/p/w342".concat(movie.poster_path);

  return (
    <div className="container">
      <div className="divInfo1">
        <h1>{title}</h1>
        <h4>{movie.tagline}</h4>
        <img
          className="img"
          src={movie.poster_path ? poster : ""}
          alt="poster"
        />
      </div>
      <div className="divInfo2">
        <ul className="ulInfo">
          <li>
            <GoPrimitiveDot /> Homepage:{" "}
            <a className="pageLink" href={`${movie.homepage}`}>
              {movie.homepage}
            </a>
            <button
              className="button favButton"
              onClick={() => handleFavorites(title)}
            >
              <MdFavoriteBorder />
            </button>
          </li>
          <li>
            <GoPrimitiveDot /> Release Date: {movie.release_date}
          </li>
          <li>
            <GoPrimitiveDot /> Genres:{" "}
            {movie.genres
              ? movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))
              : null}
          </li>
          <li>
            <GoPrimitiveDot /> Original Language: {movie.original_language}
          </li>
          <li>
            <GoPrimitiveDot /> Vote Avegrage: {movie.vote_average}
          </li>
          <br />
          <br />
          <li>{movie.overview}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleMovie;
