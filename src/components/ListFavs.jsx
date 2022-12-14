import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";

const ListFavs = () => {
  const [favs, setFavs] = useState([]);

  const handleDelete = id => {
    axios
      .delete(`/api/favorites/${id}`)
      .then(result => result.data)
      .then(fav => setFavs(favs.filter(favorit => favorit.show !== fav.show)))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    axios
      .get("/api/favorites")
      .then(result => result.data)
      .then(favs => {
        setFavs(favs);
      });
  }, []);

  return (
    <div className="favDiv1">
      <div className="favDiv2">
        <h1>Favorites</h1>
        <ul>
          {favs.map(fav => (
            <div key={fav.id} className='singleFav'>
              <li>
                <button className="button" onClick={() => handleDelete(fav.id)}>
                  <BiTrash />
                </button>
                <strong>{fav.show}</strong>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListFavs;
