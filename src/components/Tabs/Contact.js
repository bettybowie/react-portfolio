import React from "react";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      const validate = validateEmail(e.target.value);

      if (!validate) {
        setErrorMessage("Please enter a valid email");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please do not leave ${e.target.name} empty`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <h3> If you would like to contact me, please email me at bettybowielu@gmail.com or fill out this contact form. Thank you.</h3>
      <form className="form">
        <label>Name:</label>
        <input
          name="name"
          onBlur={handleInputChange}
          type="text"
          placeholder="name"
        />
        <label>Email:</label>
        <input
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label>Message:</label>
        <textarea
          id="textarea"
          name="message"
          onBlur={handleInputChange}
          type="text"
          placeholder="message"
        /> <br/>
        <button type="submit" id="contactSubmitBtn" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}
