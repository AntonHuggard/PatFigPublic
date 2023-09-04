import React, { Component } from 'react';
import './style/main.css';
import library from './data/library.json'
import BrandedFooter from './components/Footer'
import SearchBar from './components/SearchBar'

class App extends Component {
  
  state = {
    "results": library.contents
  };

  searchAssetJson = (q) => {
    console.log(`searching asset library for ${q}...`);
    let filteredResults = [];
    this.state.results.forEach(image => {
      const lowercaseTags = image.tags.map(x => x.toLowerCase());
      if (lowercaseTags.includes(q.toLowerCase())) {
        filteredResults.push(image);
      }
    });
    this.setState({results: filteredResults});
  }
  
  render() {
    
    const terms = window.location.href.split('?q=');
    const query = terms[1];
    if (query) this.searchAssetJson(query);


    return (
      <div className="App">
            <header>
                <h1>PatFig.</h1>
                <h3>Patent figures made easy(ish)</h3>
            </header>

            <div id="main-content">
                <h3>Find an asset for your patent drawings</h3>

                <SearchBar></SearchBar>

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
