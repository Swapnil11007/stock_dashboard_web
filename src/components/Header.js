// Header.js
import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from "../useAuth";
import "../styles/Header.css";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <header className="stock-header">
      <div className="logo">
        <Link to="/login">StockMarket Dashboard</Link>
      </div>
      <nav>
        <ul>
          {currentUser ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Logout />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
