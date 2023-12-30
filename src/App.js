// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Graph from "./components/Graph";
import Login from "./components/Login";
import About from "./components/About";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import { AuthProvider } from "./useAuth";
import PrivateRoute from "./PrivateRoute";
import { Provider } from "react-redux";
import store from "./components/store";
import CashFlow from "./components/CashFlow";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<PrivateRoute element={<Home />} />} />
              <Route path="/graph" element={<PrivateRoute element={<Graph />} />} />
              <Route path="/cashflow" element={<PrivateRoute element={<CashFlow />} />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/contactUs" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
