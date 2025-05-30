import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    emailjs.sendForm('service_dkdjytk', 'template_iv7pfgh', form.current, 'WpfGT8CzkvgnGTc_U')
//       .then((result) => {
//           alert('Message sent successfully!');
//           setFormData({ name: '', email: '', message: '' });
//       }, (error) => {
//   alert('Failed to send message. Please try again later.');
//   console.error('EmailJS Error:', error);
// }
// );
//   };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }, (error) => {
    alert('Failed to send message. Please try again later.');
    console.error('EmailJS Error:', error?.text || error);
  });
};




  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="contact-content">
          {/* Spline Viewer Section */}
          <div className="spline-wrapper">
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
          <spline-viewer url="https://prod.spline.design/7o8oza6kj7HPVzKl/scene.splinecode"></spline-viewer>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have questions about our projects, workshops, or how to join? 
              Reach out to us using the form or contact information below.
            </p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span> IIC BUilding, Ground Floor</span>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <span>contact@roboticssociety.edu</span>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <span>7041789836</span>
            </div>

            {/* Contact Form */}
            <form ref={form} className='contact-form' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      required
    ></textarea>
  </div>

  <button type="submit" className="btn">Send Message</button>
</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
