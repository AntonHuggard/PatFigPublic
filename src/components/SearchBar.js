import React, { Component } from 'react';

class SearchBar extends Component {
      
    render() {
        return(
            <form id='search-bar-wrapper' method='GET'>
                <input type='text' name='q'/>
                <button type='submit'>Search!</button>
            </form>
        )
    }
}

export default SearchBar;
