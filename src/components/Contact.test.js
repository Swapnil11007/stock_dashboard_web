// Contact.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {


  test("renders assistance message", () => {
    render(<Contact />);

    // Check if the assistance message is rendered
    expect(
      screen.getByText(
        /If you have any questions or concerns, please feel free to contact us./i
      )
    ).toBeInTheDocument();
  });
  test("renders contact information", () => {
    render(<Contact />);

    // Check if the Contact Us heading is rendered
    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    // Check if the company address is rendered
    expect(
      screen.getByText(/123 Stock Street, Financial District, Mumbai, India/i)
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
