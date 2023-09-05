import React, { Component } from 'react';
import './style/main.css';
import library from './data/library.json'
import BrandedFooter from './components/Footer'
import SearchBar from './components/SearchBar'
import DisplayResults from './components/DisplayResults'

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

                <DisplayResults results={this.state.results}></DisplayResults>

            </div>

            <BrandedFooter></BrandedFooter>

      </div>
    );
  }

}

export default App;
