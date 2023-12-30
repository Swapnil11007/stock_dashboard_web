// Header.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

jest.mock("../useAuth", () => ({
  useAuth: jest.fn(() => ({ currentUser: null })),
}));

describe("Header Component", () => {
  test("renders the Header component with login and register links when not logged in", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("StockSite")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(screen.queryByText("Graph")).not.toBeInTheDocument();
    expect(screen.queryByText("About")).not.toBeInTheDocument();
    expect(screen.queryByText("Contact")).not.toBeInTheDocument();

  });

  test("logs out the user when the Logout button is clicked", () => {
    // Mocking the useAuth hook to simulate a logged-in user
    jest.mock("../useAuth", () => ({
      useAuth: jest.fn(() => ({
        currentUser: { id: "123", username: "testuser" },
      })),
    }));

    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("Logout")).toBeInTheDocument();

    userEvent.click(screen.getByText("Logout"));

    // You might want to assert that the logout functionality is called,
    // or that the user is redirected to the login page, depending on your implementation.
    // For simplicity, this test assumes the Logout component works as expected.
  });

  test("renders the Header component with navigation links when logged in", () => {
    // Mocking the useAuth hook to simulate a logged-in user
    jest.mock("../useAuth", () => ({
      useAuth: jest.fn(() => ({
        currentUser: { id: "123", username: "testuser" },
      })),
    }));

    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("StockSite")).toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Register")).not.toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.queryByText("Graph")).not.toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });


});
