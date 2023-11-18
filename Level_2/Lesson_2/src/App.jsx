import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="app">
      <div className="app-header">
        <img src="../public/IMG/image-removebg-preview.png" alt="logo" />
      </div>
      <div className="app-container">
        {/* Left Section - Introduction */}
        <div className="left-section">
          <h1>YOUR EXCLUSIVE OFFER</h1>
          <p>Row House is committed to helping you start a rowing-based fitness routine that will improve your health and deliver unparalleled results. Move better, feel better and live better through Row House. Book your first class now.</p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="right-section">
          <div className='first'>
            <h1>FIRST CLASS FREE</h1>
            <p>*Available at Participating Studios.</p>
            <div className='location'>
              <h3>Your location</h3>
              <select name="location" id="location">
                <option value="Chelsea">Chelsea</option>
                <option value="Chelsea">Tustin</option>
                <option value="Chelsea">Long Beach</option>
              </select> <br />
            <span className='small_text'>Change City or Zip Code</span>
            </div>
          </div>
          <div className='form-app'>
          <form>
            <label htmlFor="username">First Name</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Phone number</label>
            <input type="password" id="password" name="password" />

            <p className='small_text'>By clicking “Try Row House,” you agree to our <b>Terms</b> and to receive automated marketing calls or texts from or on behalf of Row House at the phone number provided above. Consent is not a condition of purchase. Message and data rates may apply.</p>
            <div className='button'><button type="submit">TRY ROW HOUSE</button></div>
          </form>
          </div>
        </div>
      </div>
      <div className='app_content'>
        <div className='content1'>
          <h3>DON'T MISS A BEAT.</h3>
          <h3>SUBSCRIBE AND STAY CONNECTED</h3>
        </div>
        <div className='content2'>
          <label htmlFor="email_address">Email Address</label>
          <br />
          <input type="text" id='email_address'/>
        </div>
        <div className='content3'>
          <p>Follow us on Sosial</p>
          <span><i class="fa-brands fa-facebook"></i></span>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CLASS</h3>
          <ul>
            <li>First Timers</li>
            <li>Why Row?</li>
            <li>The Workout</li>
            <li>Meter Program</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FIND US</h3>
          <ul>
            <li>Locations</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>XPASS</h3>
          <ul>
            <li>Corporate Wellness</li>
            <li>Franchise</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SUPPORT</h3>
          <ul>
            <li>Contact Us</li>
            <li>COVID Safety Measures</li>
          </ul>
        </div>
      </footer>
      <footer className="footer2">
        <div className="footer-section">
          <ul>
            <li>©2023 Row House</li>
            <li>Your Privacy Choices</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>Privacy Notice for California Residents</li>
          </ul>
        </div>

      </footer>
    </div>
  );
  
}

export default App;
