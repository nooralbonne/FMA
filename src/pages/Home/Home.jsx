"use client"
import { Helmet } from 'react-helmet';
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import "./Home.css"
import { Link } from "react-router-dom";

import heroimg from "../../assets/images/florida pics 3.jfif.jpeg";
import Auction from "../../assets/images/Auction.png";
import People from "../../assets/images/People.png";


export default function Home() {
  return (
    <div className="page-container">
       <Helmet>
        <title>Florida Machinery Auction - Home</title>
        <meta name="description" content="Join Florida's premier auction for heavy equipment. Bid with confidence on a wide range of equipment." />
        <meta name="keywords" content="auction, machinery, heavy equipment, florida" />
        <meta property="og:title" content="Florida Machinery Auction - Home" />
        <meta property="og:description" content="Join Florida's premier auction for heavy equipment. Bid with confidence on a wide range of equipment." />
        <meta property="og:image" content={heroimg} />
        <meta property="og:url" content="https://floridamachineryauction.com" />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            {/* Eyebrow */}
            <span className="hero-eyebrow">Public auction everyone can bid</span>

            <h1 className="hero-title">
              We sell items as-is<br />
              Condition may vary
            </h1>

            <p className="hero-description">
              Welcome to Florida auction — where real opportunities meet smart investments.
              Bid with confidence on a wide range of equipment, sold as-is.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Link to="/#bidding-links-section" className="cta-button primary">
                View Upcoming Auctions
              </Link>
              <Link to="/about" className="cta-button secondary">
                Our Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Equipment Listed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">1,200</span>
                <span className="stat-label">Active Buyers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src={heroimg || "/placeholder.svg"} 
                alt="Premium heavy machinery in auction yard"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            
            {/* Floating Card */}
            <div className="floating-card">
              <div className="floating-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="floating-card-content">
                <span className="floating-card-label">Next Auction</span>
                <span className="floating-card-value">Feb 15, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consignment Auction Section */}
      <section className="consignment-section">
        <div className="consignment-inner">
          <div className="consignment-header">
            <span className="consignment-eyebrow">What we do</span>
            <h2 className="consignment-title">Consignment Auction</h2>
            <p className="consignment-subtitle">
              We specialize in a wide variety of equipment to meet all your needs
            </p>
          </div>
          
          <div className="consignment-grid">
            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 0V6a3 3 0 10-6 0v1m6 0h6m0 0V6a3 3 0 10-6 0v1m6 0v1a3 3 0 006 0V7m0 0V6a3 3 0 10-6 0v1"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">Construction Equipment</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18m-6-6l6 6 6-6M5 15V7a2 2 0 012-2h10a2 2 0 012 2v8"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">Farm Machinery</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="5.5" cy="17.5" r="2.5"/>
                  <circle cx="18.5" cy="17.5" r="2.5"/>
                  <path d="M15 6h4l3 5v6h-2M8 17H5V6h7l3 5v6"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">Tractors</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <path d="M16 8h4l3 3v5h-7V8zM5 19a2 2 0 100-4 2 2 0 000 4zM19 19a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">Vehicles & Trailers</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">Agriculture Equipment</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM12 9v6M9 12h6"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">ATVs & UTVs</h3>
            </div>

            <div className="consignment-card">
              <div className="consignment-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="consignment-card-title">All Kind of Attachments</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sell & Buy With Us Section */}
      <section className="sell-buy-section">
        <div className="sell-buy-inner">
          <div className="sell-buy-grid">
            <div className="sell-buy-card sell-card">
              <div className="sell-buy-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="sell-buy-title">Sell With Us</h3>
              <p className="sell-buy-description">
                Partner with Florida Auction to reach thousands of active buyers. We handle marketing, logistics, and ensure you get the best value for your equipment.
              </p>
              <a href="/contact" className="sell-buy-btn">Start Selling</a>
            </div>

            <div className="sell-buy-card buy-card">
              <div className="sell-buy-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <h3 className="sell-buy-title">Buy With Us</h3>
              <p className="sell-buy-description">
                Access a wide range of quality equipment at competitive prices. Register today and start bidding on auctions both online and in person.
              </p>
              <a href="/contact" className="sell-buy-btn">Start Buying</a>
            </div>
          </div>

          {/* Condition Applied Box */}
          <div className="condition-box">
            <div className="condition-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="condition-content">
              <h4 className="condition-title">Condition Applied</h4>
              <p className="condition-text">We will discuss it with the seller</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="payment-section">
        <div className="payment-inner">
          <div className="payment-header">
            <span className="payment-eyebrow">Payment Options</span>
            <h2 className="payment-title">Payment Methods</h2>
          </div>

          <div className="payment-grid">
            <div className="payment-card accepted">
              <h4 className="payment-card-title">Accepted Payments</h4>
              <ul className="payment-list">
                <li className="payment-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  <span>Cash</span>
                </li>
                <li className="payment-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  <span>Cashier Cheques</span>
                </li>
                <li className="payment-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  <span>Wire Transfer</span>
                </li>
                <li className="payment-item credit-card-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7"/>
                  </svg>
                  <span>Credit Cards</span>
                  <span className="payment-fee">*With 3.5% fees</span>
                </li>
              </ul>
            </div>

            <div className="payment-card not-accepted">
              <h4 className="payment-card-title">Not Accepted</h4>
              <ul className="payment-list">
                <li className="payment-item declined">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                  <span>Personal Cheques</span>
                </li>
              </ul>
            </div>

            <div className="payment-card tax-info">
              <h4 className="payment-card-title">Tax Information</h4>
              <div className="tax-content">
                <div className="tax-rate">
                  <span className="tax-percentage">6.5%</span>
                  <span className="tax-label">Tax Added</span>
                </div>
                <p className="tax-note">Unless you are exempt from taxes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Now Section */}
      <section className="call-now-section">
        <div className="call-now-inner">
          <div className="call-now-content">
            <svg className="call-now-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <div className="call-now-text">
              <span className="call-now-label">Call now to consign your items or learn more</span> 
              <a href="tel:+13864440654" className="call-now-number">+1 386-444-0654</a>
            </div>
          </div>
        </div>
      </section>

      {/* Auction Info Section */}
      <section className="auction-info-section">
        <div className="auction-info-inner">
          <div className="auction-info-card">
            <div className="auction-info-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="auction-info-title">Live & Online Auction</h3>
            <p className="auction-info-text">
              Participate in our auctions both in person and online. 
              Bid from anywhere in the world with our seamless online platform.
            </p>
          </div>

          <div className="auction-info-card">
            <div className="auction-info-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="auction-info-title">Location</h3>
            <p className="auction-info-text location-highlight">Orlando, Florida</p>
            <p className="auction-info-subtext">
              Visit our auction yard for equipment inspection and live bidding experience.
            </p>
          </div>
        </div>
      </section>

      {/* Online Bidding Links Section */}
      <section id="bidding-links-section" className="bidding-links-section">
        <div className="bidding-links-inner">
          <div className="bidding-links-header">
            <span className="bidding-links-eyebrow">Bid Online</span>
            <h2 className="bidding-links-title">Our Partners</h2>
          </div>
          
           <div className="bidding-links-grid">
         {/*  <a href="https://www.equipmentfacts.com" target="_blank" rel="noopener noreferrer" className="bidding-link-card">
              <div className="bidding-link-content">
                <div className="bidding-link-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
                <div className="bidding-link-text">
                  <span className="bidding-link-label">Online Bidding Powered By</span>
                  <span className="bidding-link-name">EquipmentFacts</span>
                </div>
              </div>
              <div className="bidding-link-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a> */}

        <a href="https://www.proxibid.com" target="_blank" rel="noopener noreferrer" className="bidding-link-card">
          <div className="bidding-link-content">
            <div className="bidding-link-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
            </div>
            <div className="bidding-link-text">
          <span className="bidding-link-label">Online Bidding Powered By</span>
          <span className="bidding-link-name">Proxibid</span>
            </div>
          </div>
          <div className="bidding-link-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-inner">
          <div className="gallery-text">
            <span className="gallery-eyebrow">Our Commitment</span>
            <h2 className="gallery-title">
              Honest auctions,<br />real opportunities
            </h2>

            <p className="gallery-description">
              We are committed to delivering a simple, reliable, and enjoyable auction experience for buyers and sellers alike.
            A fair market place where every bid matters
                        </p>
            <Link to="/about" className="gallery-cta">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="gallery-images">
            <div className="gallery-image-item large">
              <img 
                src={Auction}
                alt="Auction house event"
              />
            </div>
            <div className="gallery-image-item">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=380&fit=crop" 
                alt="Auction paddle bidding"
              />
            </div>
            <div className="gallery-image-item">
             
               <img 
                src={People} 
                alt="Live auction event with bidders"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-inner">
          <div className="features-header">
            <span className="features-eyebrow">Why Choose Us</span>
            <h2 className="features-title">
              A legacy of excellence<br />in every transaction
            </h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3 className="feature-title-card">Time-Efficient Process</h3>
              <p className="feature-description">
                Our streamlined auction process ensures quick turnarounds, 
                allowing you to focus on what matters most - your business.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3 className="feature-title-card">Selection</h3>
             <p className="feature-description">
            A broad selection of equipment available through both reserve and absolute auctions,
              designed to meet different bidding preferences.
            </p>

            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3 className="feature-title-card">Trusted Expertise</h3>
              <p className="feature-description">
                Three decades of industry knowledge guides every transaction, 
                providing unmatched insight and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to discover exceptional machinery?</h2>
          <p className="cta-description">
            Join Florida's premier auction community and gain access to 
            curated heavy equipment from trusted sellers.
          </p>
          <div className="cta-buttons">
              <div className="cta-buttons">
                <Link to="/contact" className="cta-btn-primary">
                  Register Today
                </Link>

                <Link to="/contact" className="cta-btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
