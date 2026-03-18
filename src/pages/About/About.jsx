"use client"
import { Helmet } from 'react-helmet';
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import "./About.css"

import Auction from "../../assets/images/Auction.png";


export default function About() {
  return (
    <div className="page-container">
       <Helmet>
        <title>About Florida Machinery Auction</title>
        <meta name="description" content="Learn about Florida Machinery Auction, our legacy, values, and commitment to excellence in heavy equipment auctions." />
        <meta name="keywords" content="Florida Machinery Auction, heavy equipment, auctions, legacy, service, integrity, expertise" />
        <meta property="og:title" content="About Florida Machinery Auction" />
        <meta property="og:description" content="Learn about Florida Machinery Auction, our legacy, values, and commitment to excellence in heavy equipment auctions." />
        <meta property="og:image" content={Auction} />
        <meta property="og:url" content="https://floridamachineryauction.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-eyebrow">Our Story</span>
          <h1 className="about-hero-title">About Florida Machinery Auction</h1>
          <p className="about-hero-description">
            For over three decades, we've been Florida's trusted partner in heavy equipment auctions, 
            building lasting relationships through integrity, expertise, and exceptional service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-content">
            <h2 className="about-story-title">A Legacy of Excellence Since 1992</h2>
            <p className="about-story-text">
              Florida Machinery Auction was founded with a simple vision: to create a transparent, 
              trustworthy marketplace for quality heavy equipment. What started as a small family 
              operation has grown into one of Florida's most respected auction houses.
            </p>
            <p className="about-story-text">
              Our commitment to quality, fair pricing, and exceptional customer service has earned 
              us the trust of thousands of buyers and sellers across the nation. We take pride in 
              every transaction, treating each piece of equipment and every customer with the 
              respect they deserve.
            </p>
          </div>
          <div className="about-story-image">
             <img 
                src={Auction}
                alt="Auction house event"
              />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header">
            <span className="about-eyebrow">Our Values</span>
            <h2 className="about-values-title">What Sets Us Apart</h2>
          </div>
          
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-number">01</div>
              <h3 className="about-value-title">Integrity</h3>
              <p className="about-value-text">
                Honesty and transparency in every transaction. We believe in building 
                trust through consistent, ethical business practices.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-number">02</div>
              <h3 className="about-value-title">Expertise</h3>
              <p className="about-value-text">
                Over 30 years of industry knowledge ensures accurate assessments 
                and valuable insights for buyers and sellers alike.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-value-number">03</div>
              <h3 className="about-value-title">Service</h3>
              <p className="about-value-text">
                Personalized attention and support throughout your auction experience. 
                Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-inner">
          <div className="about-stat">
            <span className="about-stat-number">30+</span>
            <span className="about-stat-label">Years of Experience</span>
          </div>
          <div className="about-stat-divider"></div>
          <div className="about-stat">
            <span className="about-stat-number">1M+</span>
            <span className="about-stat-label">Item Sold Through Our Partners</span>
          </div>
           {/*<div className="about-stat-divider"></div>
          
        <div className="about-stat">
            <span className="about-stat-number">5,000+</span>
            <span className="about-stat-label">Happy Customers</span>
          </div> */}

          <div className="about-stat-divider"></div>
          <div className="about-stat">
            <span className="about-stat-number">100%</span>
            <span className="about-stat-label">Commitment</span>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="about-location">
        <div className="about-location-inner">
          <div className="about-location-content">
            <span className="about-eyebrow">Visit Us</span>
            <h2 className="about-location-title">Orlando, Florida</h2>
            <p className="about-location-text">
              Our auction yard is conveniently located in Orlando, Florida. 
              Visit us to inspect equipment in person or participate in our live auctions.
            </p>
            <a href="https://maps.app.goo.gl/UMow2acDtJ6MpT2B9" target="_blank" rel="noopener noreferrer" className="about-location-cta">
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
