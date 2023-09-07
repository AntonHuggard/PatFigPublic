import React, { Component } from 'react';

class NavBar extends Component {

    // pageRedirect = () => {
    //     window.location.href='https://antonhuggard.com';
    //   }
      
    render() {
        return(
            <header>
                <a href="/" id="site-titles">
                    <h1 id="site-title">PatFig.</h1>
                    <h3 id="site-subtitle">Patent figures made easy<sup>(ish)</sup></h3>
                </a>
                <div id="show-mob-menu">&#9776;</div>
                <div id="site-nav">
                    <a href="/#/about">About</a>
                    <a href="/#/tutorial">Tutorial</a>
                    <a href="/#/contribute">Contribute</a>
                    <a href="/#/contact">Contact</a>
                </div>
            </header>
        )
    }
}

export default NavBar;
