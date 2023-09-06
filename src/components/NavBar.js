import React, { Component } from 'react';

class NavBar extends Component {

    // pageRedirect = () => {
    //     window.location.href='https://antonhuggard.com';
    //   }
      
    render() {
        return(
            <header>
                <div id="site-titles">
                    <h1 id="site-title">PatFig.</h1>
                    <h3 id="site-subtitle">Patent figures made easy<sup>(ish)</sup></h3>
                </div>
                <div></div>
                <div id="site-nav">
                    <a>About</a>
                    <a>Tutorial</a>
                    <a>Contribute</a>
                    <a>Contact</a>
                </div>
            </header>
        )
    }
}

export default NavBar;
