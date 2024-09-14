import React from 'react';
import './mainFooter.css';
import react, { useState } from 'react';


function Footer() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedLink, setSelectedLink] = useState(5);

  return (
    <>
      <footer className="laptop-footer">
        <div className='footer-container'>
          <div className='first-footer-div'>
            <div className="footer-logo">
              <img src='./images/_logo2.svg'></img>
            </div>

            <div className="footer-icon">
              <p>Find Gelato on:</p>
              <div className="icon-container">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-tiktok"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className='second-footer-div'>
            <div className="first-second-footer-div">
              <p>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
              <a>Get Started</a>
              <div className="app-container">
                <p>Get the App</p>
                <div className="app-logo-container">
                  <img src='./images/apple_store.svg' alt="Apple Store" />
                  <img src='./images/google_play.svg' alt="Google Play" />
                </div>
              </div>
            </div>

            <div className="second-second-footer-div">
              <div className="same-container">
                <p>Print on demand</p>
                <ul>
                  <li>
                    <a>What is print on demand?</a>
                  </li>
                  <li>
                    <a>Product catalog</a>
                  </li>
                  <li>
                    <a>Shipping and delivery</a>
                  </li>
                  <li>
                    <a>Dropshipping products?</a>
                  </li>
                  <li>
                    <a>Pro Sellers</a>
                  </li>
                  <li>
                    <a>White label products</a>
                  </li>
                  <li>
                    <a>Returns policy</a>
                  </li>
                  <li>
                    <a>Global, yet local</a>
                  </li>
                  <li>
                    <a>Sustainability</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                </ul>
              </div>

              <div className="same-container">
                <p>Integrations</p>
                <ul>
                  <li>
                    <a>Shopify</a>
                  </li>
                  <li>
                    <a>Etsy</a>
                  </li>
                  <li>
                    <a>WooCommerce</a>
                  </li>
                  <li>
                    <a>Wix</a>
                  </li>
                  <li>
                    <a>Squarespace</a>
                  </li>
                  <li>
                    <a>BigCommerce</a>
                  </li>
                  <li>
                    <a>API</a>
                  </li>
                </ul>
              </div>

              <div className="same-container">
                <p>Start selling</p>
                <ul>
                  <li>
                    <a>Embroidery</a>
                  </li>
                  <li>
                    <a>Print on demand t-shirts</a>
                  </li>
                  <li>
                    <a>Print on demand hoodies</a>
                  </li>
                  <li>
                    <a>Print on demand posters</a>
                  </li>
                  <li>
                    <a>Print on demand canvas</a>
                  </li>
                  <li>
                    <a>Print on demand calendars</a>
                  </li>
                  <li>
                    <a>Print on demand mugs</a>
                  </li>
                  <li>
                    <a>Custom products</a>
                  </li>
                  <li>
                    <a>Custom clothing</a>
                  </li>
                  <li>
                    <a>Custom merchandise</a>
                  </li>
                  <li>
                    <a>Custom phone cases</a>
                  </li>
                  <li>
                    <a>Print on demand Europe</a>
                  </li>
                  <li>
                    <a>Print on demand UK</a>
                  </li>
                  <li>
                    <a>Print on demand France</a>
                  </li>
                  <li>
                    <a>Print on demand Canada</a>
                  </li>
                  <li>
                    <a>Merch maker</a>
                  </li>
                </ul>
              </div>

              <div className="same-container">
                <p>Company</p>
                <ul>
                  <li>
                    <a>GelatoConnect</a>
                  </li>
                  <li>
                    <a>About Gelato</a>
                  </li>
                  <li>
                    <a>Leadership team</a>
                  </li>
                  <li>
                    <a>Board & investors</a>
                  </li>
                  <li>
                    <a>Newsroom</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Customer Stories</a>
                  </li>
                  <li>
                    <a>Partners</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Affiliates program</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="mobile-footer">
        <div className="mobile-first-footer">
          <img src='./images/_logo2.svg'></img>
          <p>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
          <a>Get Started</a>
        </div>

        <div className="mobile-second-container">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button onClick={() => {
                  selectedLink == 0 ? setSelectedLink(5) : setSelectedLink(0)
                }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  {parseInt(selectedLink) == 0 ? <i className="fas fa-chevron-down me-1"></i> : <i className="fas fa-chevron-right me-1"></i>}
                  Print on demand
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a>What is print on demand?</a>
                    </li>
                    <li>
                      <a>Product catalog</a>
                    </li>
                    <li>
                      <a>Shipping and delivery</a>
                    </li>
                    <li>
                      <a>Dropshipping products?</a>
                    </li>
                    <li>
                      <a>Pro Sellers</a>
                    </li>
                    <li>
                      <a>White label products</a>
                    </li>
                    <li>
                      <a>Returns policy</a>
                    </li>
                    <li>
                      <a>Global, yet local</a>
                    </li>
                    <li>
                      <a>Sustainability</a>
                    </li>
                    <li>
                      <a>Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button onClick={() => {
                  selectedLink == 1 ? setSelectedLink(5) : setSelectedLink(1)
                }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {parseInt(selectedLink) == 1 ? <i className="fas fa-chevron-down me-1"></i> : <i className="fas fa-chevron-right me-1"></i>}
                  Integrations
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a>Shopify</a>
                    </li>
                    <li>
                      <a>Etsy</a>
                    </li>
                    <li>
                      <a>WooCommerce</a>
                    </li>
                    <li>
                      <a>Wix</a>
                    </li>
                    <li>
                      <a>Squarespace</a>
                    </li>
                    <li>
                      <a>BigCommerce</a>
                    </li>
                    <li>
                      <a>API</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button onClick={() => {
                  selectedLink == 2 ? setSelectedLink(5) : setSelectedLink(2)
                }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {parseInt(selectedLink) == 2 ? <i className="fas fa-chevron-down me-1"></i> : <i className="fas fa-chevron-right me-1"></i>}
                  Start selling
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a>Embroidery</a>
                    </li>
                    <li>
                      <a>Print on demand t-shirts</a>
                    </li>
                    <li>
                      <a>Print on demand hoodies</a>
                    </li>
                    <li>
                      <a>Print on demand posters</a>
                    </li>
                    <li>
                      <a>Print on demand canvas</a>
                    </li>
                    <li>
                      <a>Print on demand calendars</a>
                    </li>
                    <li>
                      <a>Print on demand mugs</a>
                    </li>
                    <li>
                      <a>Custom products</a>
                    </li>
                    <li>
                      <a>Custom clothing</a>
                    </li>
                    <li>
                      <a>Custom merchandise</a>
                    </li>
                    <li>
                      <a>Custom phone cases</a>
                    </li>
                    <li>
                      <a>Print on demand Europe</a>
                    </li>
                    <li>
                      <a>Print on demand UK</a>
                    </li>
                    <li>
                      <a>Print on demand France</a>
                    </li>
                    <li>
                      <a>Print on demand Canada</a>
                    </li>
                    <li>
                      <a>Merch maker</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button onClick={() => {
                  selectedLink == 3 ? setSelectedLink(5) : setSelectedLink(3)
                }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  {parseInt(selectedLink) == 3 ? <i className="fas fa-chevron-down me-1"></i> : <i className="fas fa-chevron-right me-1"></i>}
                  Company
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <a>GelatoConnect</a>
                    </li>
                    <li>
                      <a>About Gelato</a>
                    </li>
                    <li>
                      <a>Leadership team</a>
                    </li>
                    <li>
                      <a>Board & investors</a>
                    </li>
                    <li>
                      <a>Newsroom</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                    <li>
                      <a>Customer Stories</a>
                    </li>
                    <li>
                      <a>Partners</a>
                    </li>
                    <li>
                      <a>Careers</a>
                    </li>
                    <li>
                      <a>Affiliates program</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-third-container">
          <p>Get the App</p>
          <div className="app-logo-container">
            <img src='./images/apple_store.svg' alt="Apple Store" />
            <img src='./images/google_play.svg' alt="Google Play" />
          </div>
        </div>

        <div className="mobile-fourth-container">
          <p>Find Gelato on:</p>
          <div className="app-logo-container">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </footer>
    </>
  );


};


export default Footer;
