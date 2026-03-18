import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Florida Machinery Auction</h3>
            <p className="footer-tagline">
              Florida's premier auction house for quality heavy equipment since 1992.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Navigation</h4>
              <ul className="footer-list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Auction Types</h4>
              <ul className="footer-list">
                <li>Construction Equipment</li>
                <li>Farm Machinery</li>
                <li>Tractors</li>
                <li>Vehicles & Trailers</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Online Bidding</h4>
              <ul className="footer-list">
                {/* <li>
                  <a href="https://www.equipmentfacts.com" target="_blank" rel="noopener noreferrer">
                    EquipmentFacts
                  </a>
                </li>*/}
                <li>
                  <a href="https://www.proxibid.com" target="_blank" rel="noopener noreferrer">
                    Proxibid
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Contact</h4>
              <ul className="footer-list">
                <li>
                  <a href="tel:+13864440654">+1 386-444-0654</a>
                </li>
                 <li>
                  <a href="mailto:info@floridamachineryauction.com">info@floridamachineryauction.com</a>
                </li>
                  <li>
                    <a 
                      href="https://maps.app.goo.gl/UMow2acDtJ6MpT2B9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      18498 E Colonial Dr, Orlando, FL 32820
                    </a>
                  </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Florida Machinery Auction. All rights reserved.
          </p>
          <p className="footer-powered-by">
            Powered by Tenma
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
