import React, { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsModalOpen(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("access_key", "44b60023-7b4c-47bf-904f-05ef351fb008");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const resultData = await response.json();

      if (resultData.success) {
        setResult("Form Submitted Successfully 😄");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.log("Error", resultData);
        setResult(resultData.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("An error occurred. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Full Name* </label>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email* </label>
          <div className="inp">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">Phone no. </label>
          <div className="inp">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone no."
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">Message* </label>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit">Send Us</button>
        </div>
      </form>
      {isModalOpen && <Modal message={result} closeModal={closeModal} />}
    </div>
  );
}
