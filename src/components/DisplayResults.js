import React, { Component } from 'react';

class DisplayResults extends Component {
      
    render() {
        return(
            <div id="search-results">
                {this.props.results.map(fig => ( 
                <div className="patent-drawing" key={fig.id} >
                    <label>{fig.title}</label>
                    <img src={window.location.origin + '/imgs/' + fig.svg_url} alt="patent figure" />
                    <a href={window.location.origin + '/imgs/' + fig.svg_url} download>Download vector</a>
                    <a href={window.location.origin + '/imgs/' + fig.png_url} download>Download image</a>
                </div>
                )) }
            </div>
        )
    }
}

export default DisplayResults;
