import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import BrandedFooter from '../components/Footer'
import NavBar from '../components/NavBar'

class Contribute extends Component {
  
  render() {
    return (
      <div className="Home">
            <NavBar></NavBar>

            <div id="main-content">
                <h3>Contribute</h3>
            </div>

            <BrandedFooter></BrandedFooter>
      </div>
    );
  }
}

export default Contribute;
