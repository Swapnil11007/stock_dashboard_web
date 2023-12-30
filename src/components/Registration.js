import "../styles/AuthPages.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../useAuth"; // Update the path


const Register = () => {
  const { register } = useAuth(); // Use the register function
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleRegister = () => {
    register(formData.email, formData.password);
    alert("Succesfully Registered");
    navigate("/login");
    console.log("Registering with:", formData);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
