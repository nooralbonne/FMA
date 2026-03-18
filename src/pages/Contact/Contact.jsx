"use client"
import { Helmet } from 'react-helmet';
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import "./Contact.css"

import Navbar from "../../Components/Navbar/Navbar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || 'Website Contact Form',
      message: formData.message
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('Message sent — thank you!')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        alert('Send failed — please try again or use your email client.')
      })
  }

  return (
    <div className="page-container">
       <Helmet>
        <title>Contact Us - Florida Machinery Auction</title>
        <meta name="description" content="Get in touch with Florida Machinery Auction. Contact us for consignment inquiries, bidding questions, or equipment information." />
        <meta name="keywords" content="contact, auction, consignment, equipment, bidding, florida auction" />
        <meta property="og:title" content="Contact Us - Florida Machinery Auction" />
        <meta property="og:description" content="Reach out to Florida Machinery Auction for any questions about consignment, bidding, or equipment." />
        <meta property="og:image" content="URL-to-an-image" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
      </Helmet>
      
  <Navbar />
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-eyebrow">Get In Touch</span>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Have questions about our auctions or want to consign equipment? 
            We're here to help. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-content-inner">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Phone</h3>
                <a href="tel:+13864440654" className="contact-info-value">+1 386-444-0654</a>
                <p className="contact-info-note">Call to consign or learn more</p>
              </div>
            </div>

            <a href="https://maps.app.goo.gl/UMow2acDtJ6MpT2B9" target="_blank" rel="noopener noreferrer" className="contact-info-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="contact-info-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Location</h3>
                <p className="contact-info-value">18498 E Colonial Dr</p>
                <p className="contact-info-note">Orlando, FL 32820</p>
              </div>
            </a>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Business Hours</h3>
                <p className="contact-info-value">8:00 AM - 5:00 PM</p>
                <p className="contact-info-note">Monday - Friday</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                  <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                  <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                  <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                  <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                  <path d="M10 9.5C10 10.33 9.33 11 8.5 11h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5z"/>
                  <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
                </svg>
              </div>
              <div className="contact-info-text">
                <h3 className="contact-info-title">Auction Starts</h3>
                <p className="contact-info-value">10:00 AM</p>
                <p className="contact-info-note">Live & Online bidding</p>
              </div>
            </div>

            {/* Bidding Links */}
            {/* <div className="contact-bidding">
              <h3 className="contact-bidding-title">Online Bidding Platforms</h3>
              <div className="contact-bidding-links">
               {/* <a href="https://www.equipmentfacts.com" target="_blank" rel="noopener noreferrer" className="contact-bidding-link">
                  <span>EquipmentFacts</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a> 
                <a href="https://www.proxibid.com" target="_blank" rel="noopener noreferrer" className="contact-bidding-link">
                  <span>Proxibid</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>*/}

            {/* Google Maps */}
            <div className="contact-map">
              <h3 className="contact-map-title">Find Us</h3>
              <div className="contact-map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.5773912727577!2d-81.10192201508082!3d28.552419682449496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzA4LjciTiA4McKwMDYnMTQuOCJX!5e0!3m2!1sar!2sjo!4v1769779205062!5m2!1sar!2sjo" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Florida Auction Location"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="contact-form-title">Register Now</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="consignment">Consignment Inquiry</option>
                    <option value="bidding">Bidding Questions</option>
                    <option value="equipment">Equipment Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="contact-form-submit">
                Register Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}
