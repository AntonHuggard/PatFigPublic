import React, { Component } from 'react';
import './style/main.css';
import library from './library.json'
import BrandedFooter from './components/Footer'

class App extends Component {
  
  state = {
    "results": library.contents
  };
  
  render() {

    return (
      <div className="App">
            <header>
                <h1>PatFig.</h1>
                <h3>Patent figures made easy(ish)</h3>
            </header>

            <div id="main-content">
                <h3>Find an asset for your patent drawings</h3>

                <div id="search-results">
                  {this.state.results.map(fig => ( 
                    <div className="patent-drawing" key={fig.id} >
                      <label>{fig.title}</label>
                      <img src={window.location.origin + '/imgs/' + fig.url} alt="patent figure" />
                      <a href="https://patfig.com">Download</a>
                    </div>
                  )) }
                </div>

            </div>

            <BrandedFooter></BrandedFooter>

      </div>
    );
  }

}

export default App;
