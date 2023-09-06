import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import library from '../data/library.json'
import BrandedFooter from '../components/Footer'
import SearchBar from '../components/SearchBar'
import DisplayResults from '../components/DisplayResults'
import NavBar from '../components/NavBar'

class Home extends Component {
  
  searchAssetJson = (q) => {
    console.log(`searching asset library for ${q}...`);
    let filteredResults = [];
    library.contents.forEach(image => {
      const lowercaseTags = image.tags.map(x => x.toLowerCase());
      if (lowercaseTags.includes(q.toLowerCase())) {
        filteredResults.push(image);
      }
    });
    return filteredResults;
  }
  
  getLibrary = () => {
    const terms = window.location.href.split('?q=');
    const query = terms[1];
    return query? this.searchAssetJson(query) : library.contents;
  }

  state = {
    "results": this.getLibrary()
  };
  
  render() {

    return (
      <div className="Home">
            <NavBar></NavBar>

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

export default Home;
