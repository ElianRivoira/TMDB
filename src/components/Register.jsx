import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { IoArrowUndoCircleOutline } from "react-icons/io5";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const handleName = e => {
    setName(e.target.value);
  };
  const handleLastName = e => {
    setLastName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };
  const handleDateOfBirth = e => {
    setDateOfBirth(e.target.value);
  };

  const goHome = () => {
    navigate("/");
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/user", { name, lastName, email, password, dateOfBirth })
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <nav type="navbar" className="navForm">
        <div className="nav-div">
          <button className="button back" onClick={goHome}>
            <IoArrowUndoCircleOutline className="icon"/>
          </button>
        </div>
      </nav>

      <div className="divForm1">
        <div className="divForm2">
          <h2>REGISTER</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <label>Name </label>
            <input type="text" value={name} onChange={handleName} />
            <br />
            <label>Lastname </label>
            <input type="text" value={lastName} onChange={handleLastName} />
            <br />
            <label>e-mail adress</label>
            <input type="email" value={email} onChange={handleEmail} />
            <br />
            <label>Password </label>
            <input type="password" value={password} onChange={handlePassword} />
            <br />
            <label>Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={handleDateOfBirth}
            />
            <br />
            <br />
            <button type="submit" className="formButton button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
