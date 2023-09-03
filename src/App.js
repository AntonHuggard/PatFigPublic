import React  from 'react';
import './style/main.css';
import wizardHat from './imgs/wizard-hat.png'
import kermit from './imgs/12-rules.png'
import iPooF from './imgs/iPod-front.PNG'
import iPooT from './imgs/iPod-top.PNG'
import iPoo from './imgs/iPod.PNG'
import soap from './imgs/soap-dispensor.png'
import swipe from './imgs/swipe.png'
import hands from './imgs/washing-hands.png'
import library from './library.json'

function App() {
  console.log("test");
  const figures = library.contents;
  this.figures = figures;
  return (
    <div className="App">
          <header>
              <h1>PatFig.</h1>
              <h3>Patent figures made easy(ish)</h3>
          </header>

          <div id="main-content">
              <h3>Find an asset for your patent drawings</h3>

              <div id="search-results">
              {this.figures.map(fig => ( <img src={fig.image} />)) }
                <div className="patent-drawing">
                  <label>Wizard hat</label>
                  <img src={wizardHat} alt="wizard hat" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>Kermit the Frog</label>
                  <img src={kermit} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>iPod</label>
                  <img src={iPooF} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>iPod</label>
                  <img src={iPooT} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>iPod</label>
                  <img src={iPoo} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>soap dispensor</label>
                  <img src={soap} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>tablet swipe</label>
                  <img src={swipe} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
                <div className="patent-drawing">
                  <label>hands</label>
                  <img src={hands} alt="kermie" />
                  <a href="https://patfig.com">Download</a>
                </div>
              </div>
          </div>

          <footer>
              <div id="huggards" onClick="window.location.href='https://antonhuggard.com'">
                  website by Anton Huggard
              </div>
              &copy; Anton Huggard 2023. All rights reserved.
          </footer>
    </div>
  );
}

export default App;
