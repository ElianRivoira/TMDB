import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../store/state/user";
import { useNavigate } from "react-router";
import { IoArrowUndoCircleOutline } from "react-icons/io5";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const goHome = () => {
    navigate("/");
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/user/login", { email, password })
      .then(user => {
        dispatch(logIn(user.data));
        navigate("/");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <nav type="navbar" className="navForm">
        <div className="nav-div">
          <button className="button back" onClick={goHome}>
            <IoArrowUndoCircleOutline className="icon" />
          </button>
        </div>
      </nav>

      <div className="divForm1">
        <div className="divForm2">
          <h2>LOG IN</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <label className="label">E-mail adress </label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={handleEmail}
            />
            <br />
            <label className="label">Password </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={handlePassword}
            />
            <br />
            <br />
            <button type="submit" className="formButton button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
