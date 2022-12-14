import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GoPrimitiveDot } from "react-icons/go";

const SingleUser = () => {
  const user = useSelector(state => state.singleUser);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/favorites/${user.id}`)
      .then(result => result.data)
      .then(favorites => setFavorites(favorites));
  }, [user]);

  return (
    <div className="container">
      <div className="divInfo1">
        <h1>Information</h1>
        <h3>Username: {user.name} {user.lastName}</h3>
        <h3>E-mail adress: {user.email}</h3>
        <h3>Date of Birth: {user.dateOfBirth}</h3>
      </div>
      <div className="favDiv2">
        <h1>Favorites</h1>
        <ul>
          {favorites.map(fav => (
            <li key={fav.id}>
              <GoPrimitiveDot />
              <strong>{fav.show}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleUser;
