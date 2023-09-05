import React, { Component } from 'react';

class DisplayResults extends Component {
      
    render() {
        return(
            <div id="search-results">
                {this.props.results.map(fig => ( 
                <div className="patent-drawing" key={fig.id} >
                    <label>{fig.title}</label>
                    <img src={window.location.origin + '/imgs/' + fig.url} alt="patent figure" />
                    <a href={window.location.origin + '/imgs/' + fig.url} download>Download</a>
                </div>
                )) }
            </div>
        )
    }
}

export default DisplayResults;
