import React, { Component } from 'react';

class SearchBar extends Component {
      
    render() {
        return(
            <form id='search-bar-wrapper' method='GET' autocomplete="off">
                <input type='text' name='q' placeholder='type here...' id='search-bar'/>
                <button type='submit' id='search-btn'>Search</button>
            </form>
        )
    }
}

export default SearchBar;
