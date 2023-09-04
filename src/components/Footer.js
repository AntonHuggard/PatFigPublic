import React, { Component } from 'react';

class BrandedFooter extends Component {

    pageRedirect = () => {
        window.location.href='https://antonhuggard.com';
      }
      
    render() {
        return(
            <footer>
                <div id="huggards" onClick={this.pageRedirect} >
                    website by Anton Huggard
                </div>
                &copy; Anton Huggard 2023. All rights reserved.
            </footer>
        )
    }
}

export default BrandedFooter;
