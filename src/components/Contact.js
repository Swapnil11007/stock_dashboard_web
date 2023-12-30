// Contact.js
import React from "react";

const Contact = () => {
  const companyAddress = "413 Stock market Street, Financial District, Mumbai, India";
  const emailAddress = "contactInfo@stocktrade.com";

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns, please feel free to contact us.
        We are here to help you out.
      </p>

      <h3>Address</h3>
      <p>{companyAddress}</p>

      <h3>Email</h3>
      <p>
        For general inquiries, contact us at{" "}
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>.
      </p>

      {/* Additional contact information can be added here */}
    </div>
  );
};

export default Contact;
