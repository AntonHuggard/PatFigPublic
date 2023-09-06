import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import BrandedFooter from '../components/Footer'
import NavBar from '../components/NavBar'

class About extends Component {
  
  render() {
    return (
      <div className="Home">
            <NavBar></NavBar>

            <div id="main-content">
                <h3>About</h3>
            </div>

            <BrandedFooter></BrandedFooter>
      </div>
    );
  }
}

export default About;
