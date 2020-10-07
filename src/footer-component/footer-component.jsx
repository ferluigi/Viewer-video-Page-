import React from "react";
import './footer-styles.scss';


 const Footer = () => {
    return (
      <footer id="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-3 footer-about wow fadeInUp animated">
                <p>
                  We are a young company always looking for new and creative
                  ideas to help you with our products in your everyday work.
                </p>
                <p>
                  <a href="#">Our Team</a>
                </p>
              </div>
              <div className="col-md-4 offset-md-1 footer-contact wow fadeInDown animated woww">
                <h3>Contact</h3>
                <p>
                  <i class="fas fa-map-marker-alt"></i> Via Rossini 10, 10136
                  Turin Italy
                </p>
                <p>
                  <i class="fas fa-phone"></i> Phone: (0039) 333 12 68 347
                </p>
                <p>
                  <i class="fas fa-envelope"></i> Email:{" "}
                  <a href="mailto:hello@domain.com">hello@domain.com</a>
                </p>
                <p>
                  <i className="fab fa-skype"></i> Skype: you_online
                </p>
              </div>
              <div className="col-md-4 footer-links wow fadeInUp animated">
                <div className="row">
                  <div className="col">
                    <h3>Links</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <a className="scroll-link" href="#top-content">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="#">Features</a>
                    </p>
                    <p>
                      <a href="#">How it works</a>
                    </p>
                    <p>
                      <a href="#">Our clients</a>
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      <a href="#">Plans &amp; pricing</a>
                    </p>
                    <p>
                      <a href="#">Affiliates</a>
                    </p>
                    <p>
                      <a href="#">Terms</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 footer-copyright">
                © Bootstrap Footer Template by{" "}
                <a href="https://azmind.com">AZMIND</a>
              </div>
              <div className="col-md-4 footer-social">
                
                  <a href="#">
                    <i className="fab fa-facebook-f fa-2x facebook"></i>
                  </a>
                
                
                  <a href="#">
                    <i class="fab fa-twitter fa-2x twitter"></i>
                  </a>
              
                
                  <a href="#">
                    <i className="fab fa-google-plus-g fa-2x google"></i>
                  </a>
                
                
                  <a href="#">
                    <i class="fab fa-instagram fa-2x instagram" ></i>
                  </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
 };

 export default Footer;