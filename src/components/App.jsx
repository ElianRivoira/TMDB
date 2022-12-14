import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { message } from "antd";

import SingleMovie from "./SingleMovie";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

import SingleTv from "./SingleTv";
import Navbar from "./Navbar";
import { logIn } from "../store/state/user";
import ListFavs from "./ListFavs";
import ListUsers from "./ListUsers";
import SingleUser from "./SingleUser";
import ListShows from "../commons/ListShows";

const App = () => {
  const apiKey = "993fcde28785c1f93e7aacfab9e2bdf1";
  const [singleMovie, setSingleMovie] = useState({});
  const [singleTv, setSingleTv] = useState({});
  const dispatch = useDispatch();

  const handleClickMovie = movie => {
    const id = movie.id;
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(result => result.data)
      .then(singleMovie => {
        setSingleMovie(singleMovie);
      });
  };
  const handleClickTv = serie => {
    const id = serie.id;
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)
      .then(result => result.data)
      .then(singleTv => setSingleTv(singleTv));
  };

  const handleFavorites = title => {
    message.destroy()
    axios
      .post("/api/user/addFav", { show: title })
      .then(result => result.data)
      .then(fav => console.log(fav));
  };

  useEffect(() => {
    axios
      .get("/api/user/me")
      .then(result => result.data)
      .then(user => {
        dispatch(logIn(user))})
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home />
            </>
          }
        />
        <Route
          path="/search/movies"
          element={
            <>
              <Navbar />
              <ListShows
                handleClickShow={handleClickMovie}
                handleFavorites={handleFavorites}
                show="movie"
              />
            </>
          }
        />
        <Route
          path="/search/tv"
          element={
            <>
              <Navbar />
              <ListShows
                handleClickShow={handleClickTv}
                handleFavorites={handleFavorites}
                show="tv"
              />
            </>
          }
        />
        <Route
          path="/search/users"
          element={
            <>
              <Navbar />
              <ListUsers />
            </>
          }
        />
        <Route
          path="/search/movies/:title"
          element={
            <>
              <Navbar />
              <SingleMovie
                movie={singleMovie}
                handleFavorites={handleFavorites}
              />
            </>
          }
        />
        <Route
          path="/search/tv/:name"
          element={
            <>
              <Navbar />
              <SingleTv serie={singleTv} handleFavorites={handleFavorites} />
            </>
          }
        />
        <Route
          path="/search/users/:id"
          element={
            <>
              <Navbar />
              <SingleUser />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Navbar />
              <ListFavs />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
