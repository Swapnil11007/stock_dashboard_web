import React, { useState } from "react";
import { useAuth } from "../useAuth";
import "../styles/AuthPages.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { users, login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(users);
    const user = users.find((u) => u.email === formData.email);
    if (user && user.password === formData.password) {
      login(formData.email, formData.password);
      console.log("Logging in with:", formData);
      navigate("/graph");
    } else {
      alert("Wrong username or Password");
      console.error("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
