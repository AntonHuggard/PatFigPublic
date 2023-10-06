import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import '../style/footer.css';
import BrandedFooter from '../components/Footer'
import NavBar from '../components/NavBar'

class Contact extends Component {
  
  render() {
    return (
      <div className="Home">
            <NavBar></NavBar>

            <div id="page-container">
              <div id="main-content">
                  <h3>Contact</h3>
                  <p>
                    Send me an email at: <email>ahuggardwork@gmail.com</email>. 
                  </p>
              </div>

              <BrandedFooter></BrandedFooter>
            </div>

      </div>
    );
  }
}

export default Contact;
