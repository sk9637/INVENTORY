import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!username || !contact || !email || !password) {
      setError("Please fill in all fields");
    } else {
      // Clear error message
      setError("");

      // Perform form submission or other actions
      // ...
    }
  };

  return (
    <div className="container1">
      <div className="form-container1">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <h1>SIGN UP</h1>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={handleChangeContact}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn" type="submit">
              <strong>Submit</strong>
            </button>
            <Link to="/" className="link">
              <strong>Login</strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
