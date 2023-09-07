import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import '../style/footer.css';
import BrandedFooter from '../components/Footer'
import NavBar from '../components/NavBar'

class Contribute extends Component {
  
  render() {
    return (
      <div className="Home">
            <NavBar></NavBar>

            <div id="main-content">
                <h3>Contribute</h3>
                <p>
                    Links:
                </p>
                <ul>
                    <li><a href="https://github.com/AntonHuggard/PatFigPublic">GitHub repo</a></li>
                </ul>
            </div>

            <BrandedFooter></BrandedFooter>
      </div>
    );
  }
}

export default Contribute;
