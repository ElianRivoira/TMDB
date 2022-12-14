import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {MdLogout} from "react-icons/md"

import { logOut } from "../store/state/user";
import logo from "../assets/images/logo-short.svg";
import { setSingleUser } from "../store/state/singleUser";

const Navbar = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    axios
      .post("/api/user/logout")
      .then(() => {
        dispatch(logOut());
        navigate("/");
      })
      .catch(err => console.error(err));
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav type="navbar" className="nav">
      <div className="nav-div">
        <Link to="/">
          <img src={logo} alt="logo" id="logo" />
        </Link>
        {user.name ? (
          <>
            <div>
              <Link to="/search/users" className="navLink">Users</Link>
              <Link to="/favorites" className="navLink">
                Favorites
              </Link>
              <Link
                to={`/search/users/${user.id}`}
                onClick={() => dispatch(setSingleUser(user))}
                className="navLink"
              >
                Profile
              </Link>
                <button onClick={handleLogout} className="button navButton"><MdLogout /></button>
            </div>
          </>
        ) : (
          <>
            <div>
                <button onClick={handleLogin} className="button navButton">Log In</button>
                <button onClick={handleRegister} className="button navButton">Register</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
