import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  
  init('hOhSwbDg3fFCjLx34'); 

  const handleChange = (e) => {
    const { name, value } = e.target;

  
    if (form[name] !== '') {
      setForm({ ...form, [name]: '', [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.subject) newErrors.subject = "Subject is required.";
    if (!form.message) newErrors.message = "Message is required.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    send('service_i9vamxe', 'template_b84z0gp', form)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        alert('Message sent successfully!');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='nameemail'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="email"
            name="email"
            placeholder="Email ex:yours@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <input
          className='subject'
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <span className="error">{errors.subject}</span>}
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">Submit</button>
      </form>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Phone: 6374418536</p>
        <p>Email: Kishore103345@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;



