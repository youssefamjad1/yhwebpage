import React, { useState } from 'react';
import '../styles/Contact.css'; // Ensure this path matches your project structure
import 'boxicons/css/boxicons.min.css'; // Import Boxicons
import { Box } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validate = () => {
    const { name, subject, phone, email, message } = formData;
    let text = '';

    if (name.length < 5) {
      text = 'Please Enter a valid Name';
    } else if (subject.length < 10) {
      text = 'Please Enter a Correct Subject';
    } else if (isNaN(phone) || phone.length !== 10) {
      text = 'Please Enter a valid Phone Number';
    } else if (email.indexOf('@') === -1 || email.length < 6) {
      text = 'Please Enter a valid Email';
    } else if (message.length <= 40) {
      text = 'Please Enter More Than 40 Characters';
    } else {
      return true;
    }

    setErrorMessage(text);
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        subject: '',
        phone: '',
        email: '',
        message: '',
      });
      setErrorMessage('');
    }
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="wrapper">
        <h2>Contact Us</h2>
        {errorMessage && <div id="error_message">{errorMessage}</div>}
        {successMessage && <div id="success_message">{successMessage}</div>}
        <form id="myform" onSubmit={handleSubmit}>
          <div className="form_group">
            <div className="input_field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-tag"></i>
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input_field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input_field">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="btn">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>

      {/* Social Icons Section */}
      <Box className="social-icons" display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
      </Box>
      
      {/* Decorative Water & Nature SVGs */}
      <svg className="water-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" height="100" width="100%">
        <path fill="#a1c4fd" d="M0,0 C150,100 300,100 450,50 C600,0 750,0 900,50 C1050,100 1200,100 1200,100 L1200,120 L0,120 Z"/>
      </svg>
    </div>
  );
};

export default Contact;
