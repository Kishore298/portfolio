import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form  onSubmit={handleSubmit}>
        <div className='nameemail'>
        <input  type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input  type="email" name="email" placeholder="Email ex:yours@gmail.com" value={form.email} onChange={handleChange} required />
        </div>
        <input className='subject' type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-details">
       < h2>Contact Details</h2>
        <p>Phone: 6374418536</p>
        <p>Email: Kishore103345@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;