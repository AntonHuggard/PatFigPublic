import React, { Component } from 'react';
import '../style/main.css';
import '../style/navbar.css';
import '../style/footer.css';
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
      lowercaseTags.forEach(x => {
        // for the query "key", the tag "keyboard" should be a match
        // however, we don't want repeat results (e.g. for "phone" and "smartphone")
        if(x.includes(q.toLowerCase()) && !(filteredResults.includes(image))) {
          filteredResults.push(image);
        }
      })
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

            <div id="page-container">

            <div id="main-content">
                <h3>Find an asset for your patent drawings</h3>

                <SearchBar></SearchBar>

                <DisplayResults results={this.state.results}></DisplayResults>

            </div>

            <BrandedFooter></BrandedFooter>

            </div>

      </div>
    );
  }

}

export default Home;
