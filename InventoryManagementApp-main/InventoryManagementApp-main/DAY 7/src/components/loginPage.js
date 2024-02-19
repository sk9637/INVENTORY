import React, { useState } from "react";
import "../components/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
    } else {
      // Perform your login logic here

      // Example: Redirect the user to the home page
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeUserName}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn2" type="submit">
              <strong>Login</strong>
            </button>
            <Link to="/Signup" className="link1">
              <strong style={{ fontSize: "15px" }}>
                Don't you have an account? Register here
              </strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
