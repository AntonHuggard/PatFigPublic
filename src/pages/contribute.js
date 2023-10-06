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

            <div id="page-container">

              <div id="main-content">
                  <h3>Contribute</h3>
                  <p>
                      Are you an Artist wanting to advertise your talents to Patent Attorneys?
                      Please get in contact.<br/>
                      <br/>
                      Links:
                  </p>
                  <ul>
                      <li><a href="https://github.com/AntonHuggard/PatFigPublic">GitHub repo</a></li>
                      <li><a href="https://forms.gle/btzPZNmqQCL4g4j99">Report a bug or request a feature</a></li>
                  </ul>
              </div>

              <BrandedFooter></BrandedFooter>

            </div>
      </div>
    );
  }
}

export default Contribute;
