import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const ListShows = ({ handleClickShow, handleFavorites, show }) => {
  const apiKey = "993fcde28785c1f93e7aacfab9e2bdf1";
  const [shows, setShows] = useState([]);
  const user = useSelector(state => state.user);

  const handleSearch = e => {
    const search = e.target.value;
    axios
      .get(
        `https://api.themoviedb.org/3/search/${show}?api_key=${apiKey}&include_adult=true&query=${search}`
      )
      .then(result => result.data)
      .then(searched => {
        setShows(searched.results);
      });
  };

  return (
    <div className="navSearch">
      <input type="search" placeholder="search" onChange={handleSearch} />
      <div className="shows">
        {shows.map(show => (
          <div key={show.id} className="singleShow">
            <div className="titleDiv">
              <Link
                className="titleShow"
                to={show.title || show.name}
                onClick={() => handleClickShow(show)}
              >
                <h5>{show.title || show.name}</h5>
              </Link>
              {user.name ? (
                <button
                  className="favButton button"
                  onClick={() => handleFavorites(show.title || show.name)}
                >
                  <MdFavoriteBorder />
                </button>
              ) : null}
            </div>
            <div className="overviewDiv">
              <p>{show.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListShows;
