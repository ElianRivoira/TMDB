import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

import { setSingleUser } from "../store/state/singleUser";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getUser = id => {
    axios
      .get(`/api/user/search/${id}`)
      .then(result => result.data)
      .then(user => {
        dispatch(setSingleUser(user));
      });
  };

  useEffect(() => {
    axios
      .get("/api/user")
      .then(result => result.data)
      .then(users => setUsers(users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="favDiv1">
      <div className="favDiv2">
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <div key={user.id}>
              <li>
                <Link
                  className="userLink"
                  to={`${user.id}`}
                  onClick={() => getUser(user.id)}
                >
                  <GoPrimitiveDot />
                  <strong>{user.name}</strong>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListUsers;
