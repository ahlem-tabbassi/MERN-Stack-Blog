import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-box">
          <h1>Contact Us</h1>
          {submitted ? (
            <p className="success-message">Thank you for reaching out! We'll get back to you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default ContactPage;




