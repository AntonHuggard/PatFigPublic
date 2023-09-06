import React, { Component } from 'react';

class NavBar extends Component {

    // pageRedirect = () => {
    //     window.location.href='https://antonhuggard.com';
    //   }
      
    render() {
        return(
            <header>
                <h1>PatFig.</h1>
                <h3>Patent figures made easy<sup>(ish)</sup></h3>
            </header>
        )
    }
}

export default NavBar;
