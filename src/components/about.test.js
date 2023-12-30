// About.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  test("renders about information", () => {
    render(<About />);

    // Check if the About StockTrade heading is rendered
    expect(screen.getByText("About StockTrade")).toBeInTheDocument();

    // Check if the company description is rendered
    expect(
      screen.getByText(
        /StockTrade is a leading financial services company based out of India./i
      )
    ).toBeInTheDocument();
  });

  test("renders traders information", () => {
    render(<About />);

    // Check if the Our Traders heading is rendered
    expect(screen.getByText("Our Traders")).toBeInTheDocument();

    // Check if each trader's information is rendered
    const traders = [
      { name: "JVipin Soni", expertise: "Equity Trading" },
      { name: "Aaheli Tanavar", expertise: "Options Trading" },
      { name: "Bob Johnson", expertise: "Forex Trading" },
    ];

    traders.forEach((trader) => {
      expect(
        screen.getByText(
          new RegExp(`${trader.name} - ${trader.expertise}`, "i")
        )
      ).toBeInTheDocument();
    });
  });

  test("renders contact information", () => {
    render(<About />);

    // Check if the Contact Us heading is rendered
    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    // Check if the contact information is rendered
    expect(
      screen.getByText(
        /If you have any questions or inquiries, feel free to reach out to us at/i
      )
    ).toBeInTheDocument();

    // Check if the email address is rendered as a link
    const emailLink = screen.getByRole("link", {
      name: /info@stocktrade.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.href).toEqual("mailto:info@stocktrade.com");
  });
});

// Add more test cases as needed to achieve complete coverage
