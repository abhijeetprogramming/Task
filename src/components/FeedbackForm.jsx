import React, { useState } from "react";
import "./FeedBackForm.css";

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      return;
    }
    alert("Feedback submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
    setError("");
    onClose();
  };

  return (
    <div className="feedback-form">
      {" "}
      <h2>Feedback Form</h2> {error && <p className="error">{error}</p>}{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />{" "}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />{" "}
        <button type="submit">Submit</button>{" "}
      </form>{" "}
      <button className="close-btn" onClick={onClose}>
        ×
      </button>{" "}
    </div>
  );
};

export default FeedbackForm;
